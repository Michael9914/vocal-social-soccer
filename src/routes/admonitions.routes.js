const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const admonitionsControllers = require('../controllers/admonitions.controllers');


router.get('/', admonitionsControllers.getListAdmonitions);

router.get('/add-admonition', admonitionsControllers.getAddAdmonition);

router.post('/add-admonition', async (req, res) => {
    const {player_number, player_name} = req.body;
    const newLink = {
        player_name,
        player_number,
        
    };
    await pool.query('INSERT INTO admonitions set ?', [newLink]);
    res.send('received');
});

router.get('/', async (req, res) => {
    res.render('pages/admonitions/list-admonitions')
});
module.exports = router;