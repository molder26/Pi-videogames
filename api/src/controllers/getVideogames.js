require("dotenv").config();
const URL = "https://api.rawg.io/api";
const axios = require("axios");
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db.js");

exports.getVideogames = async (req, res) => {
    const { name } = req.query;
    let allVideoGames = [];
    let gamesDBFull = {};
    let nextUrl = URL;

    try {
        if (name) {
            let gamesDB = await Videogame.findOne({
                where: { name: name },
                include: [Genre],
            });
            if (gamesDB) {
                gamesDBFull = {
                    id: gamesDB.id,
                    name: gamesDB.name,
                    image: gamesDB.image,
                    rating: gamesDB.rating,
                    genres: gamesDB.genres.map((g) => g.name).join(", "),
                    released: gamesDB.released,
                    description: gamesDB.description,
                };
            }

            const { data } = await axios.get(
                `${URL}/games?key=${API_KEY}&search=${name}`
            );

            const findedVideoGames = data.results.map((game) => {
                return {
                    id: game.id,
                    name: game.name,
                    img: game.background_image,
                    genres:
                        game.genres &&
                        game.genres
                            .map((g) => g.name)
                            .filter((g) => g != null)
                            .join(", "),
                };
            });

            findedVideoGames = findedVideoGames.concat(gamesDBFull);

            if (findedVideoGames.length > 0)
                return res.status(200).json(findedVideoGames.slice(0, 15));
            else {
                return res.status(200).json("No games");
            }
        }

        for (let i = 1; i < 6; i++) {
            const { data } = await axios.get(
                `${nextUrl}/games?key=${API_KEY}&page=${i}`
            );

            nextUrl = data.next;

            const videoGames = data.results.map((game) => {
                return {
                    id: game.id,
                    name: game.name,
                    img: game.background_image,
                    genres:
                        game.genres &&
                        game.genres
                            .map((g) => g.name)
                            .filter((g) => g != null)
                            .join(", "),
                    rating: game.rating,
                };
            });
            allVideoGames = allVideoGames.concat(videoGames);
        }

        // const dbGames = await Videogame.findAll({ include: [Genre] });
        // const jsonGames = dbGames.map((J) => J.toJSON());
        // jsonGames.forEach((C) => {
        //     C.genres = C.genres
        //         .map((genre) => genre.name)
        //         .filter((p) => p != null)
        //         .join(", ");
        // });
        // allVideoGames = gamesResults.concat(jsonGames);
        return res.status(200).json(allVideoGames);
    } catch (error) {
        return res.status(400).send(error);
    }
};
