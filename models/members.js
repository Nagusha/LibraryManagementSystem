
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

sequelize.sync()
  .then(() => {
    console.log('Member model synchronized with database!');
  })
  .catch(err => {
    console.error('Error synchronizing model:', err);
  });
