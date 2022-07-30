require("dotenv").config();
const URL = "https://api.rawg.io/api";
const axios = require("axios");
const { API_KEY } = process.env;

exports.getVideogames = async (req, res) => {
    const { name } = req.query;
    let allVideoGames = [];
    let nextUrl = URL;

    if (name) {
        try {
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

            if (findedVideoGames.length > 0)
                return res.status(200).json(findedVideoGames.slice(0, 15));
            else {
                // findedVideoGames.push({ isEmpty: "true" });
                return res.status(200).json("No games");
            }
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    for (let i = 1; i < 6; i++) {
        try {
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
                    // released: game.released,
                    // platforms: game.parent_platforms && game.parent_platforms.map((p) => p.platform.name).filter(p => p != null).join(', '),
                };
            });
            allVideoGames = allVideoGames.concat(videoGames);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
    return res.status(200).json(allVideoGames);
};
