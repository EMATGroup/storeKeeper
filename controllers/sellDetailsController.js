const {sequelize, Op} = require('../config/database');
const Warehouse = require('../models/Warehouse');
const SellDetails = require('../models/SellDetails');
const Item = require('../models/Item');


exports.add = async (req, res) => {
  try {
    const sellDetails = await SellDetails.create(req.body);
    return res.status(200).json(sellDetails);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const sellDetailss = await SellDetails.findAll({
      include: [Warehouse,SellDetails,Item],
    });
    return res.status(200).json(sellDetailss);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const [updated] = await SellDetails.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const updatedSellDetails = await SellDetails.findOne({
        where: { id: id },
        include: [Warehouse,SellDetails,Item]
      });
      return res.status(200).json({ sellDetails: updatedSellDetails });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const sellDetails = await SellDetails.findOne({
      where: { id: id },
      include: [Warehouse,SellDetails,Item]
    });
    if (sellDetails) {
      return res.status(200).json(sellDetails);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


exports.findByWarehouseId = async (req, res) => {
  try {
    const { warehouseId } = req.params;
    const sellDetails = await SellDetails.findAll({
      where: { warehouseId: warehouseId },
      include: [Warehouse,SellDetails,Item]
    });
    if (sellDetails) {
      return res.status(200).json(sellDetails);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SellDetails.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send('SellDetails deleted');
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
