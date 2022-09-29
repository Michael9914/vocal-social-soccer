const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const teamsControllers = require('../controllers/teams.controllers');


router.get('/', teamsControllers.getListTeams);

router.get('/add-team', teamsControllers.getAddTeam);

router.post('/add-team', async (req, res) => {
    const {name, logo,} = req.body;
    const newLink = {
        name,
        logo,
        
    };
    await pool.query('INSERT INTO teams set ?', [newLink]);
    res.send('received');
});

router.get('/', async (req, res) => {
    res.render('pages/teams/list-teams')
});
module.exports = router;