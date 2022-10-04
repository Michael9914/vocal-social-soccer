const pool = require("../config/database");
const goals = require("../models/goal.model");

const Goals = {}

Goals.postGoal = async (req, res) => {
  const {
    goal,
    player_number,
    team_name

  } = req.body;
  const newLink = {
    goal,
    player_number,
    team_name

  };
  await pool.query('INSERT INTO goals set ?', [newLink]);
  req.flash('success', 'Gol CREADO CORRECTAMENTE');
  res.redirect("/goals");
};


Goals.getListGoals = async (req, res) => {
  const goals = await pool.query('SELECT * FROM goals');
  res.render('pages/goals/list-goals', { goals });
};

Goals.deleteGoal = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM goals WHERE ID = ?", [id]);
  req.flash('success', 'Gol ELIMINADO CORRECTAMENTE');
  res.redirect("/goals");
};

Goals.editGoal = async (req, res) => {
  const { id } = req.params;
  const goals = await pool.query('SELECT * FROM goals WHERE id = ?', [id]);
  console.log(goals[0]);
  res.render('pages/goals/edit-goals', { goal: goals[0] });
};


Goals.updateGoal = async (req, res) => {
  const { id } = req.params;
  const { goal, player_number, team_name, } = req.body;
  const newLink =
  {
    goal,
    player_number,
    team_name
  };
  await pool.query('UPDATE goals set ? WHERE id = ?', [newLink, id]);
  req.flash('success', 'Gol EDITADO CORRECTAMENTE');
  res.redirect('/goals');

};
module.exports = Goals






/* 
Goals.getAddGoal = (req, res) => {
  res.render('pages/goals/add-goals');
}; */
