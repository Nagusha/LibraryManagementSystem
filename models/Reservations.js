
const Reservation = sequelize.define('Reservation', {
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
  reservation_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Reservation',
  timestamps: false  
});

sequelize.sync()
  .then(() => {
    console.log('Reservation model synchronized with database!');
  })
  .catch(err => {
    console.error('Error synchronizing model:', err);
  });
