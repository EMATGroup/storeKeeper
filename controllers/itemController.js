const sequelize = require('../config/database');
const Item = require('../models/Item');
const Category = require('../models/Category');

exports.createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findAllItems = async (req, res) => {
  try {
    const items = await Item.findAll({
      include: Category
    });
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { itemId } = req.params;

    const [updated] = await Item.update(req.body, {
      where: { id: itemId }
    });

    if (updated) {
      const updatedItem = await Item.findOne({
        where: { id: itemId },
        include: Category
      });
      return res.status(200).json({ item: updatedItem });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findItemId = async (req, res) => {
  try {
    const { itemId } = req.params;
    const item = await Item.findOne({
      where: { id: itemId },
      include: Category
    });
    if (item) {
      return res.status(200).json(item);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const deleted = await Item.destroy({
      where: { id: itemId }
    });
    if (deleted) {
      return res.status(204).send('Item deleted');
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
