/* 
Database.js 
Connection to the Oilstock database ..
Based on MySQL
Using Sequelize Method..
Database server: Localhost 
Database Name: oilstock
.....
CodeBy: @Ehab
DocumentedBy; @Mohd
*/
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

module.exports = new Sequelize('oilstock', process.env.DBUSERNAME, process.env.DBPASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
