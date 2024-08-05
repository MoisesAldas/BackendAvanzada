const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');

router.get('/clientes', clienteController.obtenerClientes);
router.put('/clientes/aceptar/:id', clienteController.aceptarRegistro);
router.put('/clientes/denegar/:id', clienteController.denegarRegistro);

module.exports = router;
