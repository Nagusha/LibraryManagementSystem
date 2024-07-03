
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database24', 'nagusha', 'demo12', {
  host: 'localhost',
  dialect: 'postgres', 
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();
