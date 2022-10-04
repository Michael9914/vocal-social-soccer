const pool = require("../config/database");
const stadiums = require("../models/stadium.model");

const Stadiums = {}

Stadiums.postStadium = async (req, res) => {
  const {
    name

  } = req.body;
  const newLink = {
    name

  };
  await pool.query('INSERT INTO stadiums set ?', [newLink]);
  req.flash('success', 'Estadio CREADO CORRECTAMENTE');
  res.redirect("/stadiums");
};


Stadiums.getListStadiums = async (req, res) => {
  const stadiums = await pool.query('SELECT * FROM stadiums');
  res.render('pages/stadiums/list-stadiums', { stadiums });
};

Stadiums.deleteStadium = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM stadiums WHERE ID = ?", [id]);
  req.flash('success', 'Estadio ELIMINADO CORRECTAMENTE');
  res.redirect("/stadiums");
};

Stadiums.editStadium = async (req, res) => {
  const { id } = req.params;
  const stadiums = await pool.query('SELECT * FROM stadiums WHERE id = ?', [id]);
  console.log(stadiums[0]);
  res.render('pages/stadiums/edit-stadiums', { stadium: stadiums[0] });
};


Stadiums.updateStadium = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const newLink =
  {
    name
  };
  await pool.query('UPDATE stadiums set ? WHERE id = ?', [newLink, id]);
  req.flash('success', 'Estadio ACTUALIZADO CORRECTAMENTE');
  res.redirect('/stadiums');

};
module.exports = Stadiums






/* 
Stadiums.getAddStadium = (req, res) => {
  res.render('pages/stadiums/add-stadiums');
}; */