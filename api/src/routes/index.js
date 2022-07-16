const { Router } = require("express");
const { getVideogames } = require("../controllers/getVideogames");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames", getVideogames);

module.exports = router;
