const express = require('express');
const router = express.Router();
const controllers = require('../controllers/categoryController');

router.post('/add', controllers.createCategory);
router.get('/', controllers.findAllCategories);
router.post('/update/:categoryId', controllers.updateCategory);
router.get('/findByCategoryId/:categoryId', controllers.findCategoryId);
router.delete('/delete/:categoryId', controllers.deleteCategory);

module.exports = router;
