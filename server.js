const express = require('express');

const sequelize = require('./config/database');
const Category = require('./models/Category');
const Item = require('./models/Item');

const app = express();
app.use(express.json());

app.use('/category', require('./routes/categoryRoute'));

Item.belongsTo(Category, { constraints: true, onDelete: 'CASCADE' });
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
