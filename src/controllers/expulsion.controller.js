const pool = require("../config/database");
const expulsions = require("../models/expulsion.model");

const Expulsions={}

Expulsion.getListExpulsions = (req, res) => {
    res.render('pages/expulsions/list-expulsions');
};

Expulsion.postExpulsion = async(req, res) =>{    
    const {
      player_name,
      player_number,
      
    } = req.body;
    const newLink = {
      player_name,
      player_number,    
      
    };
    await pool.query('INSERT INTO expulsions set ?', [newLink]);
    res.redirect("/expulsions/list-expulsions");
  };


  Expulsions.deletePlayer = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM expulsions WHERE ID = ?", [id]);    
    res.redirect("/expulsions/list-expulsions");
    };

    Expulsions.getExpulsion = async (req, res) => {
  const { id } = req.params;
  const expulsion = await pool.query('SELECT * FROM expulsions WHERE id = ?', [id]);
  res.render('pages/expulsion/edit-expulsions', {expulsion: expulsion[0]});
};
Expulsions.updateExpulsion = async (req, res) => {
  const { id } = req.params;
  const {  player_name , player_number } = req.body;
  const newLink = { player_name , player_number};
  await pool.query('UPDATE expulsions set ? WHERE id = ?', [newLink, id]);  
  res.redirect('/expulsions/list-expulsions');
  
}; 
module.exports=Expulsions