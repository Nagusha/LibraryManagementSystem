const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');

const Member = sequelize.define('Member', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(255)
  },
  phone_number: {
    type: DataTypes.STRING(20)
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true
  }
}, {
  sequelize,
  modelName: 'Member',
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
module.exports = Members;
