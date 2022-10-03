const pool = require("../config/database");
const players = require("../models/player.model");

const Players={}

Players.postPlayer = async(req, res) =>{    
  const {
    name,
    position,
    shirt_number
    
  } = req.body;
  const newLink = {
    name,
    position,
    shirt_number,    
    
  };
  await pool.query('INSERT INTO players set ?', [newLink]);
  res.redirect("/players");
};

Players.getListPlayers = async (req, res) => {
  const players = await pool.query ('SELECT * FROM players');
  res.render('pages/players/list-players', {players});
};

  Players.deletePlayer = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM players WHERE ID = ?", [id]);    
    res.redirect("/players");
    };

    Players.editPlayer = async (req, res) => {
      const { id } = req.params;
      const players = await pool.query('SELECT * FROM players WHERE id = ?', [id]);
      console.log(players[0]);
      res.render('pages/players/edit-players', {player: players[0]}); 
  };

Players.updatePlayer = async (req, res) => {
  const { id } = req.params;
  const { name,
    position,
    shirt_number } = req.body;
  const newLink = 
  { name,
    position,
    shirt_number
  };
  await pool.query('UPDATE players set ? WHERE id = ?', [newLink, id]);  
  
  res.redirect('/players');
  
}; 
module.exports=Players


/* Players.getAddPlayer = (req, res) => {
  res.render('pages/players/add-players');
};
 */