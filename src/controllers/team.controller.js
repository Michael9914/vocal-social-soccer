const pool = require("../config/database");
const teams = require("../models/team.model");

const Teams={}

Team.getListTeams = (req, res) => {
    res.render('pages/teams/list-teams');
};

 Teams.postTeam = async(req, res) =>{    
    const {
        name,
        logo,
      
    } = req.body;
    const newLink = {
        name,
        logo,
      
    };
    await pool.query('INSERT INTO teams set ?', [newLink]);
    res.redirect("/teams/list-teams");
  };


  Teams.deletePlayer = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM teams WHERE ID = ?", [id]);    
    res.redirect("/teams/list-teams");
    };

  Teams.getTeam = async (req, res) => {
  const { id } = req.params;
  const team = await pool.query('SELECT * FROM teams WHERE id = ?', [id]);
  res.render('pages/team/edit-teams', {team: team[0]});
};
Teams.updateTeam = async (req, res) => {
  const { id } = req.params;
  const {  player_name , player_number } = req.body;
  const newLink = { player_name , player_number};
  await pool.query('UPDATE teams set ? WHERE id = ?', [newLink, id]);  
  res.redirect('/teams/list-teams');
  
}; 
module.exports=Teams