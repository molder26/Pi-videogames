require("dotenv").config();
const URL = "https://api.rawg.io/api";
const axios = require("axios");
const { API_KEY } = process.env;

exports.getGenres = async (req, res) => {
    
    try {
        const { data } = await axios.get(`${URL}/genres?key=${API_KEY}`);

        const allGenres = data.results.map((genres) => {
            return {
                id: genres.id,
                name: genres.name,
            };
        });

        return res.status(200).json(allGenres);
    } catch (error) {
        return res.status(400).send(error);
    }
};