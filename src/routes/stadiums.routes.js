const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const stadiumsControllers = require('../controllers/stadiums.controller');


router.get('/add-stadium', (req, res) =>{
    res.render('pages/stadiums/add-stadiums');
});

router.post('/post-stadium', stadiumsControllers.postStadium);

router.get('/', stadiumsControllers.getListStadiums);

router.get('/delete-stadium/:id', stadiumsControllers.deleteStadium);

router.get('/edit-stadium/:id', stadiumsControllers.editStadium);

router.post('/edit-stadium/:id', stadiumsControllers.updateStadium);

module.exports = router;

























/* //eliminar AMONESTACION
router.get('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM stadiums WHERE ID = ?', [id]);
    res.redirect('/stadiums');
});

//editar AMONESTACION 

router.get('/edit-stadiums/:id', async (req, res) => {

    const{id}= req.params;
    const stadiums = await pool.query('SELECT * FROM stadiums Where id = ?', [id]);
    console.log (stadiums[0]);
    res.render('pages/stadiums/edit-stadiums', {stadium: stadiums [0]} )
}); 

router.post('/edit-stadiums/:id', async (req, res) => 
{
    const {id} = req.params;
    const {player_name, player_number} = req.body;
    const newLink = {
        player_name, 
        player_number
    };
    console.log(newLink);
    await pool.query ('UPDATE stadiums set ? WHERE id =?', [newLink, id])
    res.redirect('/stadiums')    
});  */