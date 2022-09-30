const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const playersControllers = require('../controllers/players.controller');


router.get('/', playersControllers.getListPlayers);

router.get('/add-player', playersControllers.getAddPlayer); 

router.post('/add-player', async (req, res) => {
    const { name, position, shirt_number} = req.body;
    const newLink = {
        name,
        position,
        shirt_number
        
    };
    await pool.query('INSERT INTO players set ?', [newLink]);
    
    res.redirect('/players');
}); 
 //eliminar AMONESTACION
router.get('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM players WHERE ID = ?', [id]);
    res.redirect('/players');
});

//editar AMONESTACION 

router.get('/edit-players/:id', async (req, res) => {

    const{id}= req.params;
    const players = await pool.query('SELECT * FROM players Where id = ?', [id]);
    console.log (players[0]);
    res.render('pages/players/edit-players', {player: players [0]} )
}); 

router.post('/edit-players/:id', async (req, res) => 
{
    const {id} = req.params;
    const { name, position, shirt_number} = req.body;
    const newLink = {
        name, 
        position,
        shirt_number
    };
    console.log(newLink);
    await pool.query ('UPDATE players set ? WHERE id =?', [newLink, id])
    res.redirect('/players')    
}); 
module.exports = router;