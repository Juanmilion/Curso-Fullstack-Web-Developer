const express = require('express');
const app = express();
const PORT = 3000;

// Ruta GET con parámetro
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;

  if (nombre.toLowerCase() === 'juanma') {
    res.send(`¡Hola ${nombre}! Bienvenido al ejercicio 3.`);
  } else {
    res.send(`Hola ${nombre}, pero no eres Juanma 😅`);
  }
});

// Ruta raíz opcional
app.get('/', (req, res) => {
  res.send('Servidor Express funcionando correctamente.');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
