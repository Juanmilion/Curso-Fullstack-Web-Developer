const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const playersRoutes = require('./routes/players');

// Rutas
app.use('/players', playersRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('API de jugadores funcionando correctamente');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
