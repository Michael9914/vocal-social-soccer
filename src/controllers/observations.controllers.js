const pool = require("../config/database");
const observations = require("../models/observation.model");

const Observations={}

Observation.getListObservations = (req, res) => {
    res.render('pages/observations/list-observations');
};

 Observations.postObservation = async(req, res) =>{    
    const {
        stadium,
        observation_team1,
        observation_team2,
      
    } = req.body;
    const newLink = {
        stadium,
        observation_team1,
        observation_team2,
      
    };
    await pool.query('INSERT INTO observations set ?', [newLink]);
    res.redirect("/observations/list-observations");
  };


  Observations.deletePlayer = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM observations WHERE ID = ?", [id]);    
    res.redirect("/observations/list-observations");
    };

  Observations.getObservation = async (req, res) => {
  const { id } = req.params;
  const observation = await pool.query('SELECT * FROM observations WHERE id = ?', [id]);
  res.render('pages/observation/edit-observations', {observation: observation[0]});
};
Observations.updateObservation = async (req, res) => {
  const { id } = req.params;
  const {  player_name , player_number } = req.body;
  const newLink = { player_name , player_number};
  await pool.query('UPDATE observations set ? WHERE id = ?', [newLink, id]);  
  res.redirect('/observations/list-observations');
  
}; 
module.exports=Observations