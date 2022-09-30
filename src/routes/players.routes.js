const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const playersControllers = require('../controllers/players.controllers');


router.get('/', playersControllers.getListPlayers);

router.get('/add-player', playersControllers.getAddPlayer);

router.post('/add-player', async (req, res) => {
    const {name, position, shirt_number,} = req.body;
    const newLink = {
        name,
        position,
        shirt_number,
        
    };
    await pool.query('INSERT INTO players set ?', [newLink]);
    res.send('received');
});

router.get('/', async (req, res) => {
    res.render('pages/players/list-players')
});
module.exports = router;