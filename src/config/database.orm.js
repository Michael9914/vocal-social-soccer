const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "social_soccer_vocal";

mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Database created or verified successfully");
    })
})

const goalsModel = require('../models/goal.model');
const teamsModel = require ('../models/team.model');
const admonitionsModel = require ('../models/admonition.model');
const expulsionsModel = require ('../models/expulsion.model');
const matchesModel = require ('../models/match.model');
const observationsModel = require  ('../models/observation.model');
const playersModel = require ('../models/player.model');
const stadiumsModel = require ('../models/stadium.model');
const vowelsModel = require ('../models/vowel.model');




const sequelize = new Sequelize(
  'social_soccer_vocal',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Connect')
  })
  .catch(err => {
    console.log('No connect')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("synchronized tables")
  })

const goals = goalsModel(sequelize, Sequelize);
const teams = teamsModel(sequelize, Sequelize);
const admonitions = admonitionsModel(sequelize, Sequelize);
const expulsions = expulsionsModel(sequelize, Sequelize);
const matches = matchesModel(sequelize, Sequelize);
const observations = observationsModel(sequelize, Sequelize);
const players = playersModel(sequelize, Sequelize);
const stadiums = stadiumsModel(sequelize, Sequelize);
const vowels = vowelsModel(sequelize, Sequelize);


// hasMany uno 
//belognsTo muchos

//Relaciones 
  matches.hasMany(vowels)   //vowels es mucho matches 1 
 vowels.belongsTo(matches) 

players.hasMany(vowels)
vowels.belongsTo(players) 

teams.hasMany(players)
players.belongsTo(teams) 

goals.hasMany(matches)
matches.belongsTo(goals) 

admonitions.hasMany(matches)
matches.belongsTo(admonitions) 

expulsions.hasMany(matches)
matches.belongsTo(expulsions) 

observations.hasMany(matches)
matches.belongsTo(observations) 

matches.hasMany(stadiums)
stadiums.belongsTo(matches) 
 


module.exports = {
  goals,
  teams,
  admonitions,
  expulsions,
  matches,
  observations,
  players,
  stadiums,
  vowels
}