const pool = require("../config/database");
const matchs = require("../models/match.model");

const Matchs={}

Match.getListMatchs = (req, res) => {
    res.render('pages/matchs/list-matchs');
};

Matchs.postMatchs = async(req, res) =>{    
    const {
      stadium,
      date_start,
      time_start,
      
    } = req.body;
    const newLink = {
        stadium,
        date_start,
        time_start,    
      
    };
    await pool.query('INSERT INTO matchs set ?', [newLink]);
    res.redirect("/matchs/list-matchs");
  };


  Matchs.deletePlayer = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM matchs WHERE ID = ?", [id]);    
    res.redirect("/matchs/list-matchs");
    };

  Matchs.getMatch = async (req, res) => {
  const { id } = req.params;
  const match = await pool.query('SELECT * FROM matchs WHERE id = ?', [id]);
  res.render('pages/match/edit-matchs', {match: match[0]});
};
Matchs.updateMatch = async (req, res) => {
  const { id } = req.params;
  const {  player_name , player_number } = req.body;
  const newLink = { player_name , player_number};
  await pool.query('UPDATE matchs set ? WHERE id = ?', [newLink, id]);  
  res.redirect('/matchs/list-matchs');
  
}; 
module.exports=Matchs