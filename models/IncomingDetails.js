const Sequelize = require('sequelize');
const db = require('../config/database');

const Warehouse = require('./Warehouse');
const Item = require('./Item');

const IncomingDetails = db.define('incomingDetails', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  previousQTY: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  transactionQTY: {
    type: Sequelize.DOUBLE,

    allowNull: false,
  },
  afterQTY: {
    type: Sequelize.DOUBLE,

    allowNull: false,
  },
  transactionDate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
});


module.exports = IncomingDetails;

// declare associations
IncomingDetails.belongsTo(Item, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
IncomingDetails.belongsTo(Warehouse, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
