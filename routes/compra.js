
const express = require('express');
const router = express.Router();    
const controller =require('../controllers/controllerCompra')
router.post('/', controller.crearCompra);
router.patch('/:id_compra/pagar', controller.confirmarCompra);
module.exports=router;
