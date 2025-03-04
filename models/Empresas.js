const mongoose = require("mongoose");

const empresaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String },
  email: { type: String, unique: true },
  fechaRegistro: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Empresa", empresaSchema);
