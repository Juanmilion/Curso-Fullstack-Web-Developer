const express = require('express');
const router = express.Router();

// Datos de ejemplo
let players = [
    { id: 1, name: 'Messi', team: 'PSG', age: 36 },
    { id: 2, name: 'Ronaldo', team: 'Al-Nassr', age: 38 },
    { id: 3, name: 'Mbappé', team: 'PSG', age: 25 }
];

// GET /players - devuelve todos los jugadores
router.get('/', (req, res) => {
    res.json(players);
});

// POST /players - añade un nuevo jugador
router.post('/', (req, res) => {
    const { name, team, age } = req.body;

    // Validación simple
    if (!name || !team || !age) {
        return res.status(400).json({ error: 'Faltan datos. Se requieren "name", "team" y "age".' });
    }

    const newPlayer = {
        id: players.length + 1,
        name,
        team,
        age
    };

    players.push(newPlayer);

    res.status(201).json({ message: 'Jugador añadido correctamente', player: newPlayer });
});

module.exports = router;
