const express = require('express');
const router = express.Router();
const JsBarcode = require('jsbarcode');
const controllers = require('../controllers/sellDetailsController');

router.post('/add', controllers.add);
router.get('/', controllers.findAll);
router.put('/update/:id', controllers.update);
router.get('/findById/:id', controllers.findById);
router.get('/warehouseId/:warehouseId', controllers.findByWarehouseId);
router.delete('/delete/:id', controllers.delete);

module.exports = router;
