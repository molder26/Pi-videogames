const { Videogame } = require("../db.js");

exports.deleteVideoGame = async (req, res) => {
    const { id } = req.params;

    try {
        // let game = await Videogame.findOne({ where: { id: id } });

        // await game.removeGenres();
        await Videogame.destroy({ where: { id: id } });
        return res.status(200).json(id);
    } catch (error) {
        return res.status(404).json(error);
    }
};
