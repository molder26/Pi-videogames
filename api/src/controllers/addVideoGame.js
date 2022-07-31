const { Genre, Videogame } = require("../db.js");

exports.addVideoGame = async (req, res) => {
    const { name, description, released, rating, genres, img, platforms } =
        req.body;

    let platformString = platforms.join(", ");

    let gameCreated = await Videogame.create({
        name: name,
        description: description,
        img: img,
        released: released,
        rating: rating,
        platforms: platformString,
    });

    genres.forEach(async (g) => {
        let genresGame = await Genre.findOne({ where: { name: g } });
        await gameCreated.addGenre(genresGame);
    });
    res.send("Videogame created successfully!");
};
