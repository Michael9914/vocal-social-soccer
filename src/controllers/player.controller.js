const pool = require("../config/database");
const players = require("../models/player.model");

const Players={}

Player.getListPlayers = (req, res) => {
    res.render('pages/players/list-players');
};

 Players.postPlayer = async(req, res) =>{    
    const {
        name,
        position,
        shirt_number,
      
    } = req.body;
    const newLink = {
        name,
        position,
        shirt_number   
      
    };
    await pool.query('INSERT INTO players set ?', [newLink]);
    res.redirect("/players/list-players");
  };


  Players.deletePlayer = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM players WHERE ID = ?", [id]);    
    res.redirect("/players/list-players");
    };

  Players.getPlayer = async (req, res) => {
  const { id } = req.params;
  const player = await pool.query('SELECT * FROM players WHERE id = ?', [id]);
  res.render('pages/player/edit-players', {player: player[0]});
};
Players.updatePlayer = async (req, res) => {
  const { id } = req.params;
  const {  player_name , player_number } = req.body;
  const newLink = { player_name , player_number};
  await pool.query('UPDATE players set ? WHERE id = ?', [newLink, id]);  
  res.redirect('/players/list-players');
  
}; 
module.exports=Players