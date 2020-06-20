const {sequelize, Op} = require('../config/database');
const IncomingDetails = require('../models/IncomingDetails');
const Item = require('../models/Item');
const Warehouse = require('../models/Warehouse');

exports.add = async (req, res) => {
  try {
    const incomingDetails = await IncomingDetails.create(req.body);
    return res.status(200).json(incomingDetails);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const incomingDetailss = await IncomingDetails.findAll({
      include: [Item,Warehouse],
    });
    return res.status(200).json(incomingDetailss);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const [updated] = await IncomingDetails.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const incomingDetails = await IncomingDetails.findOne({
        where: { id: id },
        include: [Item,Warehouse]
      });
      return res.status(200).json({ incomingDetails: incomingDetails });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const incomingDetails = await IncomingDetails.findOne({
      where: { id: id },
      include: [Item,Warehouse]
    });
    if (incomingDetails) {
      return res.status(200).json(incomingDetails);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findByWarehouseId = async (req, res) => {
  try {
    const { warehouseId } = req.params;
    const incomingDetails = await IncomingDetails.findAll({
      where: { warehouseId: warehouseId },
      include: [Item,Warehouse]
    });
    if (incomingDetails) {
      return res.status(200).json(incomingDetails);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await IncomingDetails.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send('Item deleted');
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
