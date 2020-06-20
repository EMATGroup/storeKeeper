const express = require('express');
const router = express.Router();
const controllers = require('../controllers/categoryController');

router.post('/add', controllers.add);
router.get('/', controllers.findAll);
router.post('/update/:categoryId', controllers.update);
router.get('/findById/:categoryId', controllers.findById);
router.delete('/delete/:categoryId', controllers.delete);

module.exports = router;
