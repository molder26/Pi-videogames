require("dotenv").config();
const URL = "https://api.rawg.io/api";
const axios = require("axios");
const { API_KEY } = process.env;

exports.getVideogameById = async (req, res) => {
    const { id } = req.params;

    try {
        const { data } = await axios.get(`${URL}/games/${id}?key=${API_KEY}`);

        const detailVideoGame = {
                id: data.id,
                name: data.name,
                img: data.background_image,
                genres: data.genres && data.genres.map((g) => g.name).filter((g) => g != null).join(", "),
                description: data.description,
                released: data.released,
                rating: data.rating,
                platforms: data.parent_platforms && data.parent_platforms.map((p) => p.platform.name).filter(p => p != null).join(', '),
        };
        return res.status(200).json(detailVideoGame);
    } catch (error) {
        return res.status(400).send(error);
    }
};
