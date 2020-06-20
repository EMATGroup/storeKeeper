const Sequelize = require('sequelize');

const db = require('../config/database');

const Category = require('./Category');
const Supplier = require('./Supplier');

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
  },
  itemBarcode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  itemSellUnit: {
    type: Sequelize.STRING,
    allowNull: false
  },
  purchasingPriceInSDG: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  purchasingPriceInUSD: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  sellingPriceInSDG: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  sellingPriceInUSD: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  expirationDate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
},
    {indexes: [
        {
          // barcode and expiration date should not be duplicated
          unique: true,
          fields: ['itemBarcode', 'expirationDate']
        }
      ],},
    );

module.exports = Item;

// declare associations
Item.belongsTo(Category, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Item.belongsTo(Supplier, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
