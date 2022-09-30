const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const admonitionsControllers = require('../controllers/admonitions.controller');


router.get('/add-admonition', (req, res) =>{
    res.reder('pages/admonitions/add-admonitions');
});

router.post('/post-admonition', admonitionsControllers.postAdmonition);

router.get('/', admonitionsControllers.getListAdmonitions);

router.get('/delete-admonition/:id', admonitionsControllers.deleteAdmonition);

router.get('/edit-admonition/:id', admonitionsControllers.getAdmonition);

router.post('/edit-admonition/:id', admonitionsControllers.updateAdmonition);


module.exports = router;

























/* //eliminar AMONESTACION
router.get('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM admonitions WHERE ID = ?', [id]);
    res.redirect('/admonitions');
});

//editar AMONESTACION 

router.get('/edit-admonitions/:id', async (req, res) => {

    const{id}= req.params;
    const admonitions = await pool.query('SELECT * FROM admonitions Where id = ?', [id]);
    console.log (admonitions[0]);
    res.render('pages/admonitions/edit-admonitions', {admonition: admonitions [0]} )
}); 

router.post('/edit-admonitions/:id', async (req, res) => 
{
    const {id} = req.params;
    const {player_name, player_number} = req.body;
    const newLink = {
        player_name, 
        player_number
    };
    console.log(newLink);
    await pool.query ('UPDATE admonitions set ? WHERE id =?', [newLink, id])
    res.redirect('/admonitions')    
});  */