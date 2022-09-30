const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const expulsionsControllers = require('../controllers/expulsions.controller');

router.get('/add-expulsion', (req, res) =>{
    res.render('pages/expulsions/add-expulsions');
});

router.post('/post-expulsion', expulsionsControllers.postExpulsion);

router.get('/', expulsionsControllers.getListExpulsions);

router.get('/delete-expulsion/:id', expulsionsControllers.deleteExpulsion);

router.get('/edit-expulsion/:id', expulsionsControllers.editExpulsion);

router.post('/edit-expulsion/:id', expulsionsControllers.updateExpulsion);




/*router.get('/', expulsionsControllers.getListExpulsions);
router.get('/add-expulsion', expulsionsControllers.getAddExpulsion);

router.post('/post-expulsion', expulsionsControllers.postExpulsion);

router.get('/', expulsionsControllers.getListExpulsions);

router.get('/delete-expulsion/:id', expulsionsControllers.deleteExpulsion);

router.get('/edit-expulsion/:id', expulsionsControllers.editExpulsion);

router.post('/edit-expulsion/:id', expulsionsControllers.updateExpulsion); */

module.exports = router;