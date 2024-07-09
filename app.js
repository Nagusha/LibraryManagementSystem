
const { Sequelize } = require('sequelize');
const { Author, Book, Loan, Members, Reservation } = require('./models');


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: true }); 
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
