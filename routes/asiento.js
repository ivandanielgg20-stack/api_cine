const express = require('express');
const router = express.Router();
const controller= require('../controllers/controllerAsiento')
router.get('/asientos', controller.getAsientos);

router.post('/asientos', controller.insertAsiento);

router.get('/asientos/:id_asiento', controller.getAsientoById);

router.put('/asientos/:id_asiento', controller.updateAsiento);

router.delete('/asientos/:id_asiento', controller.deleteAsiento);

router.get('/asientos/sala/:id_sala', controller.getAsientosBySala);

router.get('/asientos/disponibles/:id_sala', controller.searchAvailableSeats);

router.get('/asientos/buscar/:id_sala/:fila/:numero', controller.getAsientoByFilaNumero);

module.exports=router;
