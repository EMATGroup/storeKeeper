const Sequelize = require('sequelize');
const db = require('../config/database');


const Customer = db.define('customer', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  customerName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  customerPhone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  customerMobile: {
    type: Sequelize.STRING,
    allowNull: false
  },
  customerFax: {
    type: Sequelize.STRING,
    allowNull: false
  },
  customerEmail: {
    type: Sequelize.STRING,
    allowNull: false
  },
  customerAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = Customer;
