
module.exports = (app) =>{

// define routes

    app.use('/category', require('../routes/categoryRoute'));
    app.use('/item', require('../routes/itemRoutes'));
    app.use('/supplier', require('../routes/supplierRoute'));
    app.use('/warehouse', require('../routes/warehouseRoute'));
    app.use('/incomeDetails', require('../routes/incomeDetailsRoutes'));

};
