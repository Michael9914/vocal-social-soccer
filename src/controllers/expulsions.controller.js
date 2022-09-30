const pool = require("../config/database");
const expulsions = require("../models/expulsion.model");

const Expulsions={}

Expulsions.postExpulsion = async(req, res) =>{    
  const {
    player_name,
    player_number,
    
  } = req.body;
  const newLink = {
    player_name,
    player_number,    
    
  };
  await pool.query('INSERT INTO expulsions set ?', [newLink]);
  res.redirect("/expulsions");
};

Expulsions.getListExpulsions = async (req, res) => {
  const expulsions = await pool.query ('SELECT * FROM expulsions');
  res.render('pages/expulsions/list-expulsions', {expulsions});
};

  Expulsions.deleteExpulsion = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM expulsions WHERE ID = ?", [id]);    
    res.redirect("/expulsions");
    };

    Expulsions.editExpulsion = async (req, res) => {
      const { id } = req.params;
      const expulsions = await pool.query('SELECT * FROM expulsions WHERE id = ?', [id]);
      console.log(expulsions[0]);
      res.render('pages/expulsions/edit-expulsions', {expulsion: expulsions[0]}); 
  };

Expulsions.updateExpulsion = async (req, res) => {
  const { id } = req.params;
  const {  player_name , player_number } = req.body;
  const newLink = 
  { player_name , 
    player_number
  };
  await pool.query('UPDATE expulsions set ? WHERE id = ?', [newLink, id]);  
  
  res.redirect('/expulsions');
  
}; 
module.exports=Expulsions


/* Expulsions.getAddExpulsion = (req, res) => {
  res.render('pages/expulsions/add-expulsions');
};
 */