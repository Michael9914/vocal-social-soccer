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


//Relaciones 
/* players.hasMany(teams)
teams.belongsTo(players)

teamstats.hasMany(teams)
teams.belongsTo(teamstats) */

module.exports = {
  goals,
}