const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true },
    tipoUsuario: { type: String, enum: ['Administrador', 'Usuario', 'Empresa', 'Clinica'], default: 'Usuario' },
    fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
