const Sequelize = require('sequelize');
const db = require('../config/database');
const Item =require('./Item');

const SellHeader = db.define('sellHeader',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    sellDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },

    sellGrandTotal: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },

});
module.exports = SellHeader;


// declare associations
SellHeader.belongsTo(Item, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });



