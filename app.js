
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
//CRUD operations
//CREATE:
const createAuthor = async (authorData) => {
    try {
      const author = await Author.create(authorData);
      console.log('Author created:', author.toJSON());
      return author;
    } catch (error) {
      console.error('Error creating author:', error);
    }
  };
createAuthor({ name: 'Nagusha' });

//Read
const getAllAuthors = async () => {
    try {
      const authors = await Author.findAll();
      console.log('All authors:', authors);
      return authors;
    } catch (error) {
      console.error('Error getting authors:', error);
    }
  };

  const getAuthorById = async (id) => {
    try {
      const author = await Author.findByPk(id);
      if (author) {
        console.log('Author found:', author.toJSON());
        return author;
      } else {
        console.log('Author not found');
      }
    } catch (error) {
      console.error('Error getting author:', error);
    }
  };
  getAllAuthors();
  getAuthorById(1);

//UPDATE
const updateAuthor = async (id, updateData) => {
    try {
      const author = await Author.findByPk(id);
      if (author) {
        await author.update(updateData);
        console.log('Author updated:', author.toJSON());
        return author;
      } else {
        console.log('Author not found');
      }
    } catch (error) {
      console.error('Error updating author:', error);
    }
  };
  updateAuthor(1, { name: 'Nagusha' });

//DELETE
const deleteAuthor = async (id) => {
    try {
      const author = await Author.findByPk(id);
      if (author) {
        await author.destroy();
        console.log('Author deleted');
      } else {
        console.log('Author not found');
      }
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };
  deleteAuthor(1);
