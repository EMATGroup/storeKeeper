const Sequelize = require('sequelize');
const db = require('../config/database');

const Category = db.define('category', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  categoryName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Category;
