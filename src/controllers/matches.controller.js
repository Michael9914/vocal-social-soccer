const pool = require("../config/database");
const matches = require("../models/match.model");

const Matches={}

Matches.postMatch = async(req, res) =>{    
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
  await pool.query('INSERT INTO matches set ?', [newLink]);
  /* req.flash('success', 'Amonestación creada correctamente'); */
  res.redirect("/matches");
};


Matches.getListMatches = async (req, res) => {
  const matches = await pool.query ('SELECT * FROM matches');
    res.render('pages/matches/list-matches', {matches});
};

Matches.deleteMatch = async(req, res) =>{
  const { id } = req.params;
  await pool.query("DELETE FROM matches WHERE ID = ?", [id]);    
  /* req.flash('success', 'Amonestación ELIMINADO CORRECTAMENTE'); */
  res.redirect("/matches");
  };

  Matches.editMatch = async (req, res) => {
    const { id } = req.params;
    const matches = await pool.query('SELECT * FROM matches WHERE id = ?', [id]);
    console.log(matches[0]);
    res.render('pages/matches/edit-matches', {match: matches[0]}); 
};


Matches.updateMatch = async (req, res) => {
  const { id } = req.params;
  const {  stadium, date_start, time_start,} = req.body;
  const newLink = 
  { stadium,
    date_start,
    time_start,
  };
   await pool.query('UPDATE matches set ? WHERE id = ?', [newLink, id]); 
 /*   req.flash('success', 'amonestación EDITADO CORRECTAMENTE')  */
 res.redirect('/matches'); 
  
}; 
module.exports=Matches






/* 
Matches.getAddMatch = (req, res) => {
  res.render('pages/matches/add-matches');
}; */