require("dotenv").config();
const URL = "https://api.rawg.io/api";
const axios = require("axios");
const { API_KEY } = process.env;

exports.getVideogames = async (req, res) => {
    let allVideoGames = [];
    let nextUrl = URL;

    for (let i = 1; i < 6; i++) {
        try {
            const { data } = await axios
                .get(`${nextUrl}/games?key=${API_KEY}&page=${i}`)
                .catch((error) => res.status(400).json(error));
    
            console.log(nextUrl);
            nextUrl = data.next;
            console.log(data.next);
    
            const videoGames = data.results.map((game) => {
                allVideoGames.push( {
                    id: game.id,
                    name: game.name,
                    background_image: game.background_image,
                    genres: game.genres && game.genres.map((g) => g.name).filter(g => g != null).join(', '),
                    // rating: game.rating,
                    // released: game.released,
                    // platforms: game.parent_platforms && game.parent_platforms.map((p) => p.platform.name).filter(p => p != null).join(', '),
                });
            });
        } catch (error) {
            res.send(error)
        }
    }
    console.log(allVideoGames.length);
    return res.status(200).send(allVideoGames);
};
