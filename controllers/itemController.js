const {sequelize, Op} = require('../config/database');
const Item = require('../models/Item');
const Category = require('../models/Category');
const Supplier = require('../models/Supplier');

exports.add = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const items = await Item.findAll({
      include: [Category,Supplier],
    });
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const [updated] = await Item.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const updatedItem = await Item.findOne({
        where: { id: id },
        include: [Category,Supplier]
      });
      return res.status(200).json({ item: updatedItem });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findOne({
      where: { id: id },
      include: [Category,Supplier]
    });
    if (item) {
      return res.status(200).json(item);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


exports.findByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const item = await Item.findAll({
      where: { categoryId: categoryId },
      include: [Category,Supplier]
    });
    if (item) {
      return res.status(200).json(item);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Item.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send('Item deleted');
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
