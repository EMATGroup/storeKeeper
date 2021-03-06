const {sequelize, Op} = require('../config/database');
const Category = require('../models/Category');

exports.add = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const categories = await Category.findAll({});
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const [updated] = await Category.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const updatedCategory = await Category.findOne({
        where: { id: id }
      });
      return res.status(200).json({ category: updatedCategory });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({
      where: { id: id }
    });
    if (category) {
      return res.status(200).json(category);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return console.log(error);
  }
};


exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Category.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send('Category deleted');
    }

  } catch (error) {
    return res.status(500).send(error.message);
  }
};
