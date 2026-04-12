const express = require('express');
const router = express.Router();

const controller=require('../controllers/controllerFuncion')
router.get('/', controller.getFunciones);
router.post('/', controller.insertFuncion);
router.get('/:id_funcion', controller.getFuncionById);
router.put('/:id_funcion', controller.updateFuncion);
router.patch(':id_funcion', controller.patchFuncion);
router.delete(':id_funcion', controller.deleteFuncion);
router.get('sala/:id_sala', controller.getFuncionesBySala);
router.get('pelicula/:id_pelicula', controller.getFuncionesByPelicula);
module.exports=router;
