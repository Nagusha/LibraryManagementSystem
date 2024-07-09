const { DataTypes } = require('sequelize');
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

module.exports = Author;
