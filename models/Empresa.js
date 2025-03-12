const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    email: { type: String, unique: true },
    servicios: [{ type: String }],
    fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Empresa', empresaSchema);