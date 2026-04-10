const express = require('express');
const router = express.Router();
const controller= require('../controllers/controllerAsiento')
router.get('/asientos', controller.getAsientos);

router.post('/', controller.insertAsiento);

router.get('/:id_asiento', controller.getAsientoById);

router.put('/:id_asiento', controller.updateAsiento);

router.delete('/:id_asiento', controller.deleteAsiento);

router.get('/sala/:id_sala', controller.getAsientosBySala);

router.get('/disponibles/:id_sala', controller.searchAvailableSeats);

router.get('/buscar/:id_sala/:fila/:numero', controller.getAsientoByFilaNumero);

module.exports=router;
