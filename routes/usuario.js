
const express = require('express');
const router = express.Router();
const controllerUsuario = require('../controllers/controllerUsuario');
router.get('/getUsuarios', controllerUsuario.getUsuarios);  


router.post('/insertUsuario', controllerUsuario.insertUsuario);

router.get('/getUsuarioById/:id_usuario', controllerUsuario.getUsuarioById);

router.put('/updateUsuario/:id_usuario', controllerUsuario.updateUsuario);

router.delete('/deleteUsuario/:id_usuario', controllerUsuario.deleteUsuario);

router.patch('/patchUsuario/:id_usuario', controllerUsuario.patchUsuario);

router.get('/getUsuarioByEmail/:email', controllerUsuario.getUsuarioByEmail);
module.exports = router;
