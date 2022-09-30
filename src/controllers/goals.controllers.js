const pool = require("../config/database");
const goals = require("../models/goal.model");

const Goals={}

Goals.getListGoals = async (req, res) => {
  const goals = await pool.query('SELECT * FROM goals');
    res.render('pages/goals/list-goals', {goals});
};

Goals.getAddGoal = (req, res) => {
  res.render('pages/goals/add-goals');
};

Goals.postGoal = async(req, res) =>{    
    const {
      player_number,
      team_name
    } = req.body;
    const newLink = {
      player_number,
      team_name  
    };
    await pool.query('INSERT INTO goals set ?', [newLink]);
    res.redirect("/goals/list-goals");
  };


  Goals.deleteGoal = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM goals WHERE ID = ?", [id]);    
    res.redirect("/goals/list-goals");
    };

  Goals.getGoal = async (req, res) => {
  const { id } = req.params;
  const goal = await pool.query('SELECT * FROM goals WHERE id = ?', [id]);
  res.render('pages/goals/edit-goals', {goal: goal[0]});
};
Goals.updateGoal = async (req, res) => {
  const { id } = req.params;
  const { player_number, team_name } = req.body;
  const newLink = {player_number, team_name      
  };
  await pool.query('UPDATE goals set ? WHERE id = ?', [newLink, id]);  
  res.redirect('/goals/list-goals');
  
};
module.exports=Goals