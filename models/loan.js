const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Loan = sequelize.define('Loan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  book_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Books', 
      key: 'id'       
    }
  },
  member_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Members', 
      key: 'id'         
    }
  },
  loan_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Loan',
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
module.exports = Loan;
module.exports = sequelize;
