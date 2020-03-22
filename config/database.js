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

module.exports = new Sequelize('oilstock', 'ehab', 'Ehab_1982', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
