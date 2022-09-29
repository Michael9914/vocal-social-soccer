const pool = require("../config/database");
const admonitions = require("../models/admonition.model");

const Admonitions={}

Admonition.getListAdmonitions = (req, res) => {
    res.render('pages/admonitions/list-admonitions');
};

 Admonitions.postAdmonition = async(req, res) =>{    
    const {
      player_name,
      player_number,
      
    } = req.body;
    const newLink = {
      player_name,
      player_number,    
      
    };
    await pool.query('INSERT INTO admonitions set ?', [newLink]);
    res.redirect("/admonitions/list-admonitions");
  };


  Admonitions.deletePlayer = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM admonitions WHERE ID = ?", [id]);    
    res.redirect("/admonitions/list-admonitions");
    };

  Admonitions.getAdmonition = async (req, res) => {
  const { id } = req.params;
  const admonition = await pool.query('SELECT * FROM admonitions WHERE id = ?', [id]);
  res.render('pages/admonition/edit-admonitions', {admonition: admonition[0]});
};
Admonitions.updateAdmonition = async (req, res) => {
  const { id } = req.params;
  const {  player_name , player_number } = req.body;
  const newLink = { player_name , player_number};
  await pool.query('UPDATE admonitions set ? WHERE id = ?', [newLink, id]);  
  res.redirect('/admonitions/list-admonitions');
  
}; 
module.exports=Admonitions