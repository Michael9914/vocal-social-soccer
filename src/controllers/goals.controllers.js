const pool = require("../config/database");
const goals = require("../models/goal.model");

const Goals={}

Goals.getListGoals = (req, res) => {
    res.render('pages/goals/list-goals');
};

/* Players.postPlayer = async(req, res) =>{    
    const {
      playername,
      playerposition,
      surnameplayer,
      playerheight,
      playerage
    } = req.body;
    const newLink = {
      playername,
      playerposition,    
      surnameplayer,
      playerheight,
      playerage
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
  res.render('links/player/edit-players', {player: player[0]});
};
Players.updatePlayer = async (req, res) => {
  const { id } = req.params;
  const { playerposition, playername , surnameplayer, playerheight, playerage } = req.body;
  const newLink = {playerposition, playername , surnameplayer, playerheight, playerage      
  };
  await pool.query('UPDATE players set ? WHERE id = ?', [newLink, id]);  
  res.redirect('/players/list-players');
  
}; */
module.exports=Goals