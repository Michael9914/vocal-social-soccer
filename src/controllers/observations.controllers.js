const pool = require("../config/database");
const observations = require("../models/observation.model");

const Observations = {}

Observations.postObservation = async (req, res) => {
  const {
    observation_team1,
    observation_team2,

  } = req.body;
  const newLink = {
    observation_team1,
    observation_team2,

  };
  await pool.query('INSERT INTO observations set ?', [newLink]);
  req.flash('success', 'Observación CREADO CORRECTAMENTE');
  res.redirect("/observations");
};

Observations.getListObservations = async (req, res) => {
  const observations = await pool.query('SELECT * FROM observations');
  res.render('pages/observations/list-observations', { observations });
};

Observations.deleteObservation = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM observations WHERE ID = ?", [id]);
  req.flash('success', 'Observación ELIMINADO CORRECTAMENTE');
  res.redirect("/observations");
};

Observations.editObservation = async (req, res) => {
  const { id } = req.params;
  const observations = await pool.query('SELECT * FROM observations WHERE id = ?', [id]);
  console.log(observations[0]);
  res.render('pages/observations/edit-observations', { observation: observations[0] });
};

Observations.updateObservation = async (req, res) => {
  const { id } = req.params;
  const { observation_team1,
    observation_team2, } = req.body;
  const newLink =
  {
    observation_team1,
    observation_team2,
  };
  await pool.query('UPDATE observations set ? WHERE id = ?', [newLink, id]);
  req.flash('success', 'Observación ACTUALIZADO CORRECTAMENTE');
  res.redirect('/observations');

};
module.exports = Observations


/* Observations.getAddObservation = (req, res) => {
  res.render('pages/observations/add-observations');
};
 */