const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const booksRoutes = require('./routes/books');

// Rutas
app.use('/books', booksRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('API de libros funcionando correctamente');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
