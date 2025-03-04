const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = "TU_CONEXIÓN_A_MONGODB_ATLAS";

// Conectar a MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error("Error al conectar a MongoDB", err));

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});

app.use("/usuarios", require("./routes/usuarios"));
app.use("/empresas", require("./routes/empresas"));
app.use("/señales", require("./routes/señales"));
app.use("/traducciones", require("./routes/traducciones"));
app.use("/asistentevoz", require("./routes/asistenteVoz"));
app.use("/clinicas", require("./routes/clinicas"));

app.listen(PORT, () => {
  console.log(` Servidor corriendo en http://localhost:${PORT}`);
});