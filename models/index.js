'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database24', 'nagusha', 'intern', {
  host: 'localhost',
  dialect: 'postgres',
});

const models = {};

fs.readdirSync('Hii')
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = require(path.join('Hii', file))(sequelize, Sequelize.DataTypes);
    models[model.name] = model;
  });

  Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

module.exports = {
  sequelize,
  models
};
