const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const goalsControllers = require('../controllers/goals.controllers');


router.get('/', goalsControllers.getListGoals);

router.get('/add-goal', goalsControllers.getAddGoal);

router.post('/add-goal', async (req, res) => {
    const {player_number, team_name} = req.body;
    const newLink = {
        player_number,
        team_name 
    };
    await pool.query('INSERT INTO goals set ?', [newLink]);

    res.redirect('/goals');
});

router.get('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM goals WHERE ID = ?', [id]);
    res.redirect('/goals');
});

  router.get('/edit-goal/:id', async (req, res) => {
    const{id}= req.params;
    const goals = await pool.query('SELECT * FROM goals WHERE id = ?', [id]);
    console.log(goals);
    res.render('/goals/edit-goals',{goals: goals})

}); 

/* router.get('/edit-goal/:id', async (req, res) => {
    const {id} = req.params;
    const goals = await pool.query('SELECT * FROM goals WHERE id = ?', [id]);
    res.render('pages/goals/edit-goals', {goal: goals[0]});
});

router.post('/edit-goal/:id', async (req, res) =>{
    const {id} = req.params;
    const {player_number, team_name} = req.body;
    const newLink = {
        player_number,
        team_name
    };
    console.log(newLink);
    await pool.query('UPDATE goals set ? WHERE id = ?', [newLink, id]);
    res.redirect('/add-goal');
}); */

module.exports = router;