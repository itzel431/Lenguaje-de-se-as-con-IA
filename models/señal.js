const mongoose = require("mongoose");

const señalSchema = new mongoose.Schema({
  palabra: { type: String, required: true, unique: true },
  descripcion: { type: String },
  videoURL: { type: String, required: true },
});

module.exports = mongoose.model("Señal", señalSchema);
