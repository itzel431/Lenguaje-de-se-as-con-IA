const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./database"); // Importamos la conexión a MongoDB

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Llamamos la función para conectar MongoDB
connectDB();

app.use("/usuarios", require("./routes/usuarios"));
app.use("/empresas", require("./routes/empresas"));
app.use("/señales", require("./routes/señales"));
app.use("/traducciones", require("./routes/traducciones"));
app.use("/asistentevoz", require("./routes/asistenteVoz"));
app.use("/clinicas", require("./routes/clinicas"));

app.listen(PORT, () => {
  console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
});

