const { Router } = require("express");
const { addVideoGame } = require("../controllers/addVideoGame");
const { getGenres } = require("../controllers/getGenres");
const { getVideogameById } = require("../controllers/getVideogameById");
const { getVideogames } = require("../controllers/getVideogames");

const router = Router();

router.get("/videogames", getVideogames);
router.get("/videogame/:id", getVideogameById);
router.get("/genres", getGenres);
router.post("/videogames", addVideoGame);

module.exports = router;
