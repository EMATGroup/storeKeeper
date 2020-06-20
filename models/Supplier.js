const Sequelize = require('sequelize');
const db = require('../config/database');
const Item = require('./Item');

const Supplier = db.define('supplier', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  supplierName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  supplierPhone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  supplierMobile: {
    type: Sequelize.STRING,
    allowNull: false
  },
  supplierFax: {
    type: Sequelize.STRING,
    allowNull: false
  },
  supplierEmail: {
    type: Sequelize.STRING,
    allowNull: false
  },
  supplierAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = Supplier;
