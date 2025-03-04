const mongoose = require("mongoose");

const asistenteVozSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  textoEntrada: { type: String, required: true },
  respuesta: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AsistenteVoz", asistenteVozSchema);
