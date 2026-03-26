const express = require('express');
const router = express.Router();
const blueprintController = require('../controllers/blueprint-controller');

// Definicion de la ruta POST para la generacion de blueprints
router.post('/', blueprintController.createBlueprint);

module.exports = router;