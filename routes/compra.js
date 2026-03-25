
const express = require('express');
const router = express.Router();    
const controller =require('../controllers/controllerCompra')
router.post('/compras', controller.crearCompra);
router.patch('/compras/:id_compra/pagar', controller.confirmarCompra);
module.exports=router;
