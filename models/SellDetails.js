const Sequelize = require('sequelize');
const db = require('../config/database');
const Item =require('./Item');
const SellHeader =require('./SellHeader');
const Warehouse =require('./Warehouse');

const SellDetails = db.define('sellDetails',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    sellQTY: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    sellPriceInSDG: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },

    sellSubTotal: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },

});
module.exports = SellDetails;


// declare associations
SellDetails.belongsTo(Item, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
SellDetails.belongsTo(SellHeader, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
SellDetails.belongsTo(Warehouse, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });



