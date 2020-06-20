/*
Server.js

*/

const express = require('express');

const sequelize = require('./config/database');

const app = express();
app.use(express.json());

require('./startup/routes')(app);




sequelize
  .authenticate()
  .then(() => console.log('Database connected .. '))
  .catch(err => console.log('Error' + err));

sequelize
  .sync()
  .then(result => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, console.log(`Server Start on ${PORT}`));
  })
  .catch(err => console.log(err));
