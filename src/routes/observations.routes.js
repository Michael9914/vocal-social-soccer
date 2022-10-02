const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const observationsControllers = require('../controllers/observations.controllers');


router.get('/add-observation', (req, res) =>{
    res.render('pages/observations/add-observations');
});

router.post('/post-observation', observationsControllers.postObservation);

router.get('/', observationsControllers.getListObservations);

router.get('/delete-observation/:id', observationsControllers.deleteObservation);

router.get('/edit-observation/:id', observationsControllers.editObservation);

router.post('/edit-observation/:id', observationsControllers.updateObservation);

module.exports = router;

























/* //eliminar AMONESTACION
router.get('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM observations WHERE ID = ?', [id]);
    res.redirect('/observations');
});

//editar AMONESTACION 

router.get('/edit-observations/:id', async (req, res) => {

    const{id}= req.params;
    const observations = await pool.query('SELECT * FROM observations Where id = ?', [id]);
    console.log (observations[0]);
    res.render('pages/observations/edit-observations', {observation: observations [0]} )
}); 

router.post('/edit-observations/:id', async (req, res) => 
{
    const {id} = req.params;
    const {player_name, player_number} = req.body;
    const newLink = {
        player_name, 
        player_number
    };
    console.log(newLink);
    await pool.query ('UPDATE observations set ? WHERE id =?', [newLink, id])
    res.redirect('/observations')    
});  */