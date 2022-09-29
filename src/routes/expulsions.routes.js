const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const expulsionsControllers = require('../controllers/expulsions.controllers');


router.get('/', expulsionsControllers.getListExpulsions);

router.get('/add-expulsion', expulsionsControllers.getAddExpulsion);

router.post('/add-expulsion', async (req, res) => {
    const {player_number, player_name} = req.body;
    const newLink = {
        player_name,
        player_number,
        
    };
    await pool.query('INSERT INTO expulsions set ?', [newLink]);
    res.send('received');
});

router.get('/', async (req, res) => {
    res.render('pages/expulsions/list-expulsions')
});
module.exports = router;