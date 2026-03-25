const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerSala');

router.get('/', controller.getSalas);
router.post('/', controller.insertSala);
router.get('/:id_sala', controller.getSalaById);
router.put('/:id_sala', controller.updateSala);
router.patch('/:id_sala', controller.patchSala);
router.delete('/:id_sala', controller.deleteSala);


router.patch('/:id_sala/tipo', controller.updateSalaType);

module.exports = router;
