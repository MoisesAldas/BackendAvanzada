// routes/voucherRoutes.js
const express = require('express');
const multer = require('multer');
const { uploadVoucher } = require('../controller/voucherController');
const router = express.Router();

// Configuración de multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Definir la ruta para subir el comprobante
router.post('/uploadVoucher/:cedula', upload.single('file'), uploadVoucher);

module.exports = router;
