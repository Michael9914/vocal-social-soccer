const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const matchesControllers = require('../controllers/matches.controller');


router.get('/add-match', (req, res) =>{
    res.render('pages/matches/add-matches');
});

router.post('/post-match', matchesControllers.postMatch);

router.get('/', matchesControllers.getListMatches);

router.get('/delete-match/:id', matchesControllers.deleteMatch);

router.get('/edit-match/:id', matchesControllers.editMatch);

router.post('/edit-match/:id', matchesControllers.updateMatch);

module.exports = router;

























/* //eliminar AMONESTACION
router.get('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM matches WHERE ID = ?', [id]);
    res.redirect('/matches');
});

//editar AMONESTACION 

router.get('/edit-matches/:id', async (req, res) => {

    const{id}= req.params;
    const matches = await pool.query('SELECT * FROM matches Where id = ?', [id]);
    console.log (matches[0]);
    res.render('pages/matches/edit-matches', {match: matches [0]} )
}); 

router.post('/edit-matches/:id', async (req, res) => 
{
    const {id} = req.params;
    const {player_name, player_number} = req.body;
    const newLink = {
        player_name, 
        player_number
    };
    console.log(newLink);
    await pool.query ('UPDATE matches set ? WHERE id =?', [newLink, id])
    res.redirect('/matches')    
});  */