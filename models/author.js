const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');

const Author = sequelize.define('Author', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  birth_year: {
    type: DataTypes.INTEGER
  },
  nationality: {
    type: DataTypes.STRING(100)
  }
}, {
  sequelize,
  modelName: 'Author',
  timestamps: false 
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection to the database has been established successfully.");
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
module.exports = Author;
