
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

sequelize.sync()
  .then(() => {
    console.log('Author model synchronized with database!');
  })
  .catch(err => {
    console.error('Error synchronizing model:', err);
  });
