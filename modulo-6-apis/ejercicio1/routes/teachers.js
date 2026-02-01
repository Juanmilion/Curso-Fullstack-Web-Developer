// routes/teachers.js

// Importar express y crear un router
const express = require('express');
const router = express.Router();

// GET /teachers
router.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'Laura', subject: 'JavaScript' },
        { id: 2, name: 'Carlos', subject: 'NodeJS' },
        { id: 3, name: 'Ana', subject: 'React' }
    ]);
});

module.exports = router;
