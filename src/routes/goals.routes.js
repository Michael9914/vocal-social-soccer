const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const goalsControllers = require('../controllers/goals.controllers');


router.get('/', goalsControllers.getListGoals);

router.get('/add-goal', goalsControllers.getAddGoal);

router.post('/add-goal', async (req, res) => {
    const {goal, player_number, team_name} = req.body;
    const newLink = {
        goal,
        player_number,
        team_name 
    };
    await pool.query('INSERT INTO goals set ?', [newLink]);
    res.send('received');
});

router.get('/', async (req, res) => {
    res.render('pages/goals/list-goals')
});
module.exports = router;