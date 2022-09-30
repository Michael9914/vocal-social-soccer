const pool = require("../config/database");
const vowels = require("../models/vowel.model");

const Vowels={}

Vowel.getListVowels = (req, res) => {
    res.render('pages/vowels/list-vowels');
};

 Vowels.postVowel = async(req, res) =>{    
    const {
        name,
      fullname,
      
    } = req.body;
    const newLink = {
        name,
        fullname,    
      
    };
    await pool.query('INSERT INTO vowels set ?', [newLink]);
    res.redirect("/vowels/list-vowels");
  };


  Vowels.deletePlayer = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM vowels WHERE ID = ?", [id]);    
    res.redirect("/vowels/list-vowels");
    };

  Vowels.getVowel = async (req, res) => {
  const { id } = req.params;
  const vowel = await pool.query('SELECT * FROM vowels WHERE id = ?', [id]);
  res.render('pages/vowel/edit-vowels', {vowel: vowel[0]});
};
Vowels.updateVowel = async (req, res) => {
  const { id } = req.params;
  const {  player_name , player_number } = req.body;
  const newLink = { player_name , player_number};
  await pool.query('UPDATE vowels set ? WHERE id = ?', [newLink, id]);  
  res.redirect('/vowels/list-vowels');
  
}; 
module.exports=Vowels