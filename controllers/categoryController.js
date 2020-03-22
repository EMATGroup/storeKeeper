const sequelize = require('../config/database');
const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({});
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const [updated] = await Category.update(req.body, {
      where: { id: categoryId }
    });

    if (updated) {
      const updatedCategory = await Category.findOne({
        where: { id: categoryId }
      });
      return res.status(200).json({ category: updatedCategory });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findOne({
      where: { id: categoryId }
    });
    if (category) {
      return res.status(200).json(category);
    }
    return res.status(404).json('Data does not exists');
  } catch (error) {
    return console.log(error);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const deleted = await Category.destroy({
      where: { id: categoryId }
    });
    if (deleted) {
      return res.status(204).send('Category deleted');
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
