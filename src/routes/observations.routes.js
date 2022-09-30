const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const observationsControllers = require('../controllers/observations.controllers');


router.get('/', observationsControllers.getListObservations);

router.get('/add-observation', observationsControllers.getAddObservation);

router.post('/add-observation', async (req, res) => {
    const {stadium, observation_team1, observation_team2,} = req.body;
    const newLink = {
        stadium,
        observation_team1,
        observation_team2,
    };
    await pool.query('INSERT INTO observations set ?', [newLink]);
    res.send('received');
});

router.get('/', async (req, res) => {
    res.render('pages/observations/list-observations')
});
module.exports = router;