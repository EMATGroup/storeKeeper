const {sequelize, Op} = require('../config/database');
const Customer = require('../models/Customer');

exports.add = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const customers = await Customer.findAll({});
    return res.status(200).json(customers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const [updated] = await Customer.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const updatedCustomer = await Customer.findOne({
        where: { id: id }
      });
      return res.status(200).json({ customer: updatedCustomer });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findOne({
      where: { id: id }
    });
    if (customer) {
      return res.status(200).json(customer);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return console.log(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Customer.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send('Customer deleted');
    }

  } catch (error) {
    return res.status(500).send(error.message);
  }
};
