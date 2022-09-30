const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const expulsionsControllers = require('../controllers/expulsions.controller');


router.get('/', expulsionsControllers.getListExpulsions);

router.get('/add-expulsion', expulsionsControllers.getAddExpulsion);

router.post('/add-expulsion', async (req, res) => {
    const {player_number, player_name} = req.body;
    const newLink = {
        player_name,
        player_number,
        
    };
    await pool.query('INSERT INTO expulsions set ?', [newLink]);
    
    res.redirect('/expulsions');
});
//ELIMINAR EXPULSION
router.get('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM expulsions WHERE ID = ?', [id]);
    res.redirect('/expulsions');
});

//EDITAR AMONESTACION
router.get('/edit-expulsions/:id', async (req, res) => {

    const{id}= req.params;
    const expulsions = await pool.query('SELECT * FROM expulsions Where id = ?', [id]);
    console.log (expulsions[0]);
    res.render('pages/expulsions/edit-expulsions', {expulsion: expulsions [0]} )
}); 

router.post('/edit-expulsions/:id', async (req, res) => 
{
    const {id} = req.params;
    const {player_name, player_number} = req.body;
    const newLink = {
        player_name, 
        player_number
    };
    console.log(newLink);
    await pool.query ('UPDATE expulsions set ? WHERE id =?', [newLink, id])
    res.redirect('/expulsions')    
});  

module.exports = router;