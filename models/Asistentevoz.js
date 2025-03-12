
const mongoose = require('mongoose');

const asistenteVozSchema = new mongoose.Schema({
    usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    audioUrl: { type: String, required: true },
    textoGenerado: { type: String },
    fechaInteraccion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AsistenteVoz', asistenteVozSchema);