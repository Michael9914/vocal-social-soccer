const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const goalsControllers = require('../controllers/goals.controllers');

router.get('/add-goal', (req, res) =>{
    res.render('pages/goals/add-goals');
});


router.post('/post-goal', goalsControllers.postGoal);

router.get('/', goalsControllers.getListGoals);

router.get('/delete-goal/:id', goalsControllers.deleteGoal);

router.get('/edit-goal/:id', goalsControllers.editGoal);

router.post('/edit-goal/:id', goalsControllers.updateGoal);

module.exports = router;