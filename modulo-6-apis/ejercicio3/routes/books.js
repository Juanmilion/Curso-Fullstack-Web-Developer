const express = require('express');
const router = express.Router();

// Datos de ejemplo
let books = [
    { id: 1, title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', year: 1967 },
    { id: 2, title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', year: 1605 },
    { id: 3, title: 'La Sombra del Viento', author: 'Carlos Ruiz Zafón', year: 2001 }
];

// GET /books - devuelve todos los libros
router.get('/', (req, res) => {
    res.json(books);
});

// POST /books - añade un nuevo libro
router.post('/', (req, res) => {
    const { title, author, year } = req.body;
    // Validación simple
    if (!title || !author || !year) {
        return res.status(400).json({ error: 'Faltan datos. Se requieren "title", "author" y "year".' });
    }
    const newBook = {
        id: books.length + 1,
        title,
        author,
        year
    };
    books.push(newBook);
    res.status(201).json({ message: 'Libro añadido correctamente', book: newBook });
});

// PUT /books/:id - actualiza un libro existente
router.put('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author, year } = req.body;
    const book = books.find(b => b.id === bookId);
    if (!book) {
        return res.status(404).json({ error: 'Libro no encontrado' });
    }
    // Actualizar los campos si se proporcionan
    if (title) book.title = title;
    if (author) book.author = author;
    if (year) book.year = year;
    res.json({ message: 'Libro actualizado correctamente', book });
}
);;
// DELETE /books/:id - elimina un libro
router.delete('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);
    if (bookIndex === -1) {
        return res.status(404).json({ error: 'Libro no encontrado' });
    }
    books.splice(bookIndex, 1);
    res.json({ message: 'Libro eliminado correctamente' });
});;

module.exports = router;