const mongoose = require('mongoose');

const senalSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    categoria: { type: String },
    urlVideo: { type: String, required: true },
    fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Senal', senalSchema);