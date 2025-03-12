const mongoose = require('mongoose');

const traduccionSchema = new mongoose.Schema({
    senal_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Senal', required: true },
    textoGenerado: { type: String, required: true },
    audioUrl: { type: String },
    fechaTraduccion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Traduccion', traduccionSchema);
