const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const matchesControllers = require('../controllers/matches.controllers');


router.get('/', matchesControllers.getListMatches);

router.get('/add-matche', matchesControllers.getAddMatche);

router.post('/add-matche', async (req, res) => {
    const {stadium, date_start, time_start,} = req.body;
    const newLink = {
        stadium,
        date_start,
        time_start,
        
    };
    await pool.query('INSERT INTO matches set ?', [newLink]);
    res.send('received');
});

router.get('/', async (req, res) => {
    res.render('pages/matches/list-matches')
});
module.exports = router;