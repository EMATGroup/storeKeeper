const Sequelize = require('sequelize');
const db = require('../config/database');

const Warehouse = db.define('warehouse', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  warehouseName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Warehouse;
