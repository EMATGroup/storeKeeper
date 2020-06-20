const {sequelize, Op} = require('../config/database');
const Warehouse = require('../models/Warehouse');

exports.add = async (req, res) => {
  try {
    const warehouse = await Warehouse.create(req.body);
    return res.status(200).json(warehouse);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const Warehouses = await Warehouse.findAll({});
    return res.status(200).json(Warehouses);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const [updated] = await Warehouse.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const updatedWarehouse = await Warehouse.findOne({
        where: { id: id }
      });
      return res.status(200).json({ warehouse: updatedWarehouse });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const warehouse = await Warehouse.findOne({
      where: { id: id }
    });
    if (warehouse) {
      return res.status(200).json(warehouse);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return console.log(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Warehouse.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send('Warehouse deleted');
    }

  } catch (error) {
    return res.status(500).send(error.message);
  }
};
