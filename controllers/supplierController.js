const {sequelize, Op} = require('../config/database');
const Supplier = require('../models/Supplier');

exports.add = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    return res.status(200).json(supplier);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll({});
    return res.status(200).json(suppliers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const [updated] = await Supplier.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const updatedSupplier = await Supplier.findOne({
        where: { id: id }
      });
      return res.status(200).json({ supplier: updatedSupplier });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findOne({
      where: { id: id }
    });
    if (supplier) {
      return res.status(200).json(supplier);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return console.log(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Supplier.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send('Supplier deleted');
    }

  } catch (error) {
    return res.status(500).send(error.message);
  }
};
