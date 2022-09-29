const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const vowelsControllers = require('../controllers/vowels.controllers');


router.get('/', vowelsControllers.getListVowels);

router.get('/add-vowel', vowelsControllers.getAddVowel);

router.post('/add-vowel', async (req, res) => {
    const {name, fullname,} = req.body;
    const newLink = {
        name,
        fullname,
        
    };
    await pool.query('INSERT INTO vowels set ?', [newLink]);
    res.send('received');
});

router.get('/', async (req, res) => {
    res.render('pages/vowels/list-vowels')
});
module.exports = router;