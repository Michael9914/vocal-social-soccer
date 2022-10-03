const pool = require("../config/database");
const teams = require("../models/team.model");

const Teams={}

Teams.postTeam = async(req, res) =>{    
  const {
    name,
 
    
  } = req.body;
  const newLink = {
    name,

    
  };
  await pool.query('INSERT INTO teams set ?', [newLink]);
  /* req.flash('success', 'Amonestación creada correctamente'); */
  res.redirect("/teams");
};


Teams.getListTeams = async (req, res) => {
  const teams = await pool.query ('SELECT * FROM teams');
    res.render('pages/teams/list-teams', {teams});
};

Teams.deleteTeam = async(req, res) =>{
  const { id } = req.params;
  await pool.query("DELETE FROM teams WHERE ID = ?", [id]);    
  /* req.flash('success', 'Amonestación ELIMINADO CORRECTAMENTE'); */
  res.redirect("/teams");
  };

  Teams.editTeam = async (req, res) => {
    const { id } = req.params;
    const teams = await pool.query('SELECT * FROM teams WHERE id = ?', [id]);
    console.log(teams[0]);
    res.render('pages/teams/edit-teams', {team: teams[0]}); 
};


Teams.updateTeam = async (req, res) => {
  const { id } = req.params;
  const {  name } = req.body;
  const newLink = 
  { 
    name,
  };
   await pool.query('UPDATE teams set ? WHERE id = ?', [newLink, id]); 
 /*   req.flash('success', 'amonestación EDITADO CORRECTAMENTE')  */
 res.redirect('/teams'); 
  
}; 
module.exports=Teams






/* 
Teams.getAddTeam = (req, res) => {
  res.render('pages/teams/add-teams');
}; */