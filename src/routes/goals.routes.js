const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const goalsControllers = require('../controllers/goals.controllers');


router.get('/', goalsControllers.getListGoals);

router.post('/add', async (req, res) => {
    const {title, url, description} = req.body;
    const newLink = {
        title,
        url,
        description
    };
    await pool.query('INSERT INTO links set ?', [newLink]);
    res.send('received');
});
module.exports = router;