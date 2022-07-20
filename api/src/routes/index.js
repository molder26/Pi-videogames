const { Router } = require("express");
const { getGenres } = require("../controllers/getGenres");
const { getVideogameById } = require("../controllers/getVideogameById");
const { getVideogames } = require("../controllers/getVideogames");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames", getVideogames);
router.get("/videogames/:id", getVideogameById);
router.get("/genres", getGenres);

module.exports = router;
