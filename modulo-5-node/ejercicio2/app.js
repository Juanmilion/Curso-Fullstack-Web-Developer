// app.js

// Importar los módulos necesarios
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Ruta para devolver el archivo info.txt
app.get('/info', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'info.txt');
    res.sendFile(filePath);
});

// Ruta para devolver el archivo PDF
app.get('/pdf', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'documento.pdf');
    res.sendFile(filePath);
});

// Arranque del servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
