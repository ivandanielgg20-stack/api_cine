const express = require('express');
const router = express.Router();
const controllerPelicula = require('../controllers/controllerPelicula');

router.get('/getPeliculas', controllerPelicula.getPeliculas);

router.post('/insertPelicula', controllerPelicula.insertPelicula);

router.get('/getPeliculaById/:id_pelicula', controllerPelicula.getPeliculaById);

router.put('/updatePelicula/:id_pelicula', controllerPelicula.updatePelicula);

router.delete('/deletePelicula/:id_pelicula', controllerPelicula.deletePelicula);

router.patch('/patchPelicula/:id_pelicula', controllerPelicula.patchPelicula);

router.get('/getPeliculaByNombre/:nombre', controllerPelicula.getPeliculaByNombre);
module.exports = router;
