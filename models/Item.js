const Sequelize = require('sequelize');
const db = require('../config/database');

const Item = db.define('item', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  itemName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Item;
