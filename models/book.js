const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Authors',
      key: 'id'         
    }
  },
  genre: {
    type: DataTypes.STRING(100)
  },
  isbn: {
    type: DataTypes.STRING(13),
    unique: true
  },
  publication_year: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'Book',
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
module.exports = Book;
