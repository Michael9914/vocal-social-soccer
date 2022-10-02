const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const playersControllers = require('../controllers/players.controller');

router.get('/add-player', (req, res) =>{
    res.render('pages/players/add-players');
});

router.post('/post-player', playersControllers.postPlayer);

router.get('/', playersControllers.getListPlayers);

router.get('/delete-player/:id', playersControllers.deletePlayer);

router.get('/edit-player/:id', playersControllers.editPlayer);

router.post('/edit-player/:id', playersControllers.updatePlayer);




/*router.get('/', playersControllers.getListPlayers);
router.get('/add-player', playersControllers.getAddPlayer);

router.post('/post-player', playersControllers.postPlayer);

router.get('/', playersControllers.getListPlayers);

router.get('/delete-player/:id', playersControllers.deletePlayer);

router.get('/edit-player/:id', playersControllers.editPlayer);

router.post('/edit-player/:id', playersControllers.updatePlayer); */

module.exports = router;