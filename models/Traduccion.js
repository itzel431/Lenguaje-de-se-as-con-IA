const mongoose = require("mongoose");

const traduccionSchema = new mongoose.Schema({
  señal: { type: mongoose.Schema.Types.ObjectId, ref: "Señal", required: true },
  textoTraducido: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Traduccion", traduccionSchema);
