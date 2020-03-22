const express = require('express');
const router = express.Router();
const controllers = require('../controllers/itemController');

router.post('/add', controllers.createItem);
router.get('/', controllers.findAllItems);
router.post('/update/:itemId', controllers.updateItem);
router.get('/findByItemId/:itemId', controllers.findItemId);
router.delete('/delete/:itemId', controllers.deleteItem);

module.exports = router;
