// app.js

// Importar express y crear la aplicación
const express = require('express');
const app = express();
const PORT = 3000;

// Importar rutas
const alumnsRoutes = require('./routes/alumns');
const teachersRoutes = require('./routes/teachers');

// Rutas
app.use('/alumns', alumnsRoutes);
app.use('/teachers', teachersRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
