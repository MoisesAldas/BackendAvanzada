const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    cedula: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    precio: { type: Number, required: true },
    estado: { type: String, enum: ['pendiente', 'aceptado', 'denegado'], default: 'pendiente' }
});

module.exports = mongoose.model('Cliente', ClienteSchema);
