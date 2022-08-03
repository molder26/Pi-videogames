const { Genre, Videogame } = require("../db.js");

exports.addVideoGame = async (req, res) => {
    const { name, description, released, rating, genres, img, platforms } =
        req.body;

    let platformString = platforms.join(", ");

    try {
        let gameCreated = await Videogame.create({
            name: name,
            description: description,
            img: img,
            released: released,
            rating: rating,
            platforms: platformString,
    });

        for (const g of genres){
            let genresGame = await Genre.findOne({ where: { name: g } });
            await gameCreated.addGenre(genresGame);
        }

        gameCreated = {...gameCreated.dataValues, genres: genres.map((g) => g).filter(p => p != null).join(', ')};

        return res.status(200).json(gameCreated);
    } catch (error) {
        return res.status(404).json(error);
    }
};
