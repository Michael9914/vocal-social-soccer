const pool = require("../config/database");
const stadiums = require("../models/stadium.model");

const Stadiums={}

Stadium.getListStadiums = (req, res) => {
    res.render('pages/stadiums/list-stadiums');
};

 Stadiums.postStadium = async(req, res) =>{    
    const {
        name,
      
      
    } = req.body;
    const newLink = {
        name,
          
      
    };
    await pool.query('INSERT INTO stadiums set ?', [newLink]);
    res.redirect("/stadiums/list-stadiums");
  };


  Stadiums.deletePlayer = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM stadiums WHERE ID = ?", [id]);    
    res.redirect("/stadiums/list-stadiums");
    };

  Stadiums.getStadium = async (req, res) => {
  const { id } = req.params;
  const stadium = await pool.query('SELECT * FROM stadiums WHERE id = ?', [id]);
  res.render('pages/stadium/edit-stadiums', {stadium: stadium[0]});
};
Stadiums.updateStadium = async (req, res) => {
  const { id } = req.params;
  const {  player_name , player_number } = req.body;
  const newLink = { player_name , player_number};
  await pool.query('UPDATE stadiums set ? WHERE id = ?', [newLink, id]);  
  res.redirect('/stadiums/list-stadiums');
  
}; 
module.exports=Stadiums