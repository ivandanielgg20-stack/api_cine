const express = require('express');
const router = express.Router();

const controller=require('../controllers/controllerFuncion')
router.get('/funciones', controller.getFunciones);
router.post('/funciones', controller.insertFuncion);
router.get('/funciones/:id_funcion', controller.getFuncionById);
router.put('/funciones/:id_funcion', controller.updateFuncion);
router.patch('/funciones/:id_funcion', controller.patchFuncion);
router.delete('/funciones/:id_funcion', controller.deleteFuncion);

router.get('/funciones/sala/:id_sala', controller.getFuncionesBySala);
router.get('/funciones/pelicula/:id_pelicula', controller.getFuncionesByPelicula);
module.exports=router;
