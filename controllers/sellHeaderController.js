const {sequelize, Op} = require('../config/database');
const SellHeader = require('../models/SellHeader');
const Customer = require('../models/Customer');
const SellDetails = require('../models/SellDetails');


exports.add = async (req, res) => {
  try {
    const sellHeader = await SellHeader.create(req.body);
    return res.status(200).json(sellHeader);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const sellHeaders = await SellHeader.findAll({
      include: [Customer,SellDetails],
    });
    return res.status(200).json(sellHeaders);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const [updated] = await SellHeader.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const updatedSellHeader = await SellHeader.findOne({
        where: { id: id },
        include: [Customer,SellDetails]
      });
      return res.status(200).json({ sellHeader: updatedSellHeader });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const sellHeader = await SellHeader.findOne({
      where: { id: id },
      include: [Customer,SellDetails]
    });
    if (sellHeader) {
      return res.status(200).json(sellHeader);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


exports.findByCustomerId = async (req, res) => {
  try {
    const { customerId } = req.params;
    const sellHeader = await SellHeader.findAll({
      where: { customerId: customerId },
      include: [Customer,SellDetails]
    });
    if (sellHeader) {
      return res.status(200).json(sellHeader);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SellHeader.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send('SellHeader deleted');
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
