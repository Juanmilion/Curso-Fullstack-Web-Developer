// routes/alumns.js

// Importar express y crear un router
const express = require('express');
const router = express.Router();

// GET /alumns
router.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'Juanma', course: 'Full Stack' },
        { id: 2, name: 'María', course: 'Front-End' },
        { id: 3, name: 'Pedro', course: 'Back-End' }
    ]);
});

module.exports = router;
