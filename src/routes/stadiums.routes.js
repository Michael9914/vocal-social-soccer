const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const stadiumsControllers = require('../controllers/stadiums.controllers');


router.get('/', stadiumsControllers.getListStadiums);

router.get('/add-stadium', stadiumsControllers.getAddStadium);

router.post('/add-stadium', async (req, res) => {
    const {name} = req.body;
    const newLink = {
        name,
        
    };
    await pool.query('INSERT INTO stadiums set ?', [newLink]);
    res.send('received');
});

router.get('/', async (req, res) => {
    res.render('pages/stadiums/list-stadiums')
});
module.exports = router;