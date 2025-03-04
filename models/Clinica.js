const mongoose = require("mongoose");

const clinicaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String },
  email: { type: String, unique: true },
  horarioAtencion: { type: String },
  servicios: [{ type: String }], // Lista de servicios que ofrece la clínica
  fechaRegistro: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Clinica", clinicaSchema);
