const pool = require("../config/database");
const admonitions = require("../models/admonition.model");

const Admonitions = {}

Admonitions.postAdmonition = async (req, res) => {
  const {
    player_name,
    player_number,

  } = req.body;
  const newLink = {
    player_name,
    player_number,

  };
  await pool.query('INSERT INTO admonitions set ?', [newLink]);
  req.flash('success', 'Amonestación creada correctamente');
  res.redirect("/admonitions");
};

Admonitions.getListAdmonitions = async (req, res) => {
  const admonitions = await pool.query('SELECT * FROM admonitions');
  res.render('pages/admonitions/list-admonitions', { admonitions });
};

Admonitions.deleteAdmonition = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM admonitions WHERE ID = ?", [id]);
  req.flash('success', 'Amonestación ELIMINADO CORRECTAMENTE');
  res.redirect("/admonitions");
};

Admonitions.editAdmonition = async (req, res) => {
  const { id } = req.params;
  const admonitions = await pool.query('SELECT * FROM admonitions WHERE id = ?', [id]);
  console.log(admonitions[0]);
  res.render('pages/admonitions/edit-admonitions', { admonition: admonitions[0] });
};


Admonitions.updateAdmonition = async (req, res) => {
  const { id } = req.params;
  const { player_name, player_number } = req.body;
  const newLink =
  {
    player_name,
    player_number
  };
  await pool.query('UPDATE admonitions set ? WHERE id = ?', [newLink, id]);
  req.flash('success', 'amonestación EDITADO CORRECTAMENTE')
  res.redirect('/admonitions');

};
module.exports = Admonitions






/* 
Admonitions.getAddAdmonition = (req, res) => {
  res.render('pages/admonitions/add-admonitions');
}; */