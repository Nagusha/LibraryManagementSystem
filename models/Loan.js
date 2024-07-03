
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


sequelize.sync()
  .then(() => {
    console.log('Loan model synchronized with database!');
  })
  .catch(err => {
    console.error('Error synchronizing model:', err);
  });
