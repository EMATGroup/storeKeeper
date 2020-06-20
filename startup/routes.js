
module.exports = (app) =>{

// define routes

    app.use('/category', require('../routes/categoryRoute'));
    app.use('/item', require('../routes/itemRoutes'));
    app.use('/supplier', require('../routes/supplierRoute'));
    app.use('/costumer', require('../routes/costumerRoute'));
    app.use('/warehouse', require('../routes/warehouseRoute'));
    app.use('/incomeDetails', require('../routes/incomeDetailsRoutes'));
    app.use('/sellHeader', require('../routes/sellHeaderRoutes'));
    app.use('/sellDetails', require('../routes/sellDetailsRoutes'));

};
