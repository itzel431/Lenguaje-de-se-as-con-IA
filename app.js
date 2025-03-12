const express = require('express');
const conectarDB = require('./db'); // Importa la conexión
const app = express();

conectarDB(); // Conectar a la base de datos

app.use(express.json()); // Middleware para parsear JSON

// Tu configuración de rutas va aquí

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

