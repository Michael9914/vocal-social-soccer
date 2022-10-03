const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const teamsControllers = require('../controllers/teams.controller');


router.get('/add-team', (req, res) =>{
    res.render('pages/teams/add-teams');
});

router.post('/post-team', teamsControllers.postTeam);

router.get('/', teamsControllers.getListTeams);

router.get('/delete-team/:id', teamsControllers.deleteTeam);

router.get('/edit-team/:id', teamsControllers.editTeam);

router.post('/edit-team/:id', teamsControllers.updateTeam);

module.exports = router;

























/* //eliminar AMONESTACION
router.get('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM teams WHERE ID = ?', [id]);
    res.redirect('/teams');
});

//editar AMONESTACION 

router.get('/edit-teams/:id', async (req, res) => {

    const{id}= req.params;
    const teams = await pool.query('SELECT * FROM teams Where id = ?', [id]);
    console.log (teams[0]);
    res.render('pages/teams/edit-teams', {team: teams [0]} )
}); 

router.post('/edit-teams/:id', async (req, res) => 
{
    const {id} = req.params;
    const {player_name, player_number} = req.body;
    const newLink = {
        player_name, 
        player_number
    };
    console.log(newLink);
    await pool.query ('UPDATE teams set ? WHERE id =?', [newLink, id])
    res.redirect('/teams')    
});  */