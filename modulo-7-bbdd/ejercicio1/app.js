const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

// Conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // usuario por defecto XAMPP
  password: '',       // contraseña vacía por defecto
  database: 'almacen'
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

// Ruta para obtener productos
app.get('/productos', (req, res) => {
  const sql = 'SELECT * FROM productos';

  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
