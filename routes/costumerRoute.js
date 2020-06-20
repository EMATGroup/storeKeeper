const express = require('express');
const router = express.Router();
const controllers = require('../controllers/customerController');

router.post('/add', controllers.add);
router.get('/', controllers.findAll);
router.put('/update/:id', controllers.update);
router.get('/findById/:id', controllers.findById);
router.delete('/delete/:id', controllers.delete);

module.exports = router;
