const prompt = require('prompt-sync')();

const get = (op, library, next) => {
  library[op]()
    .then(console.table)
    .then(() => next(library));
};

const displayBookProperties = () => {
  console.log('ISBN', 'title', 'book_category', 'publisher_name');
};

const filterBooks = (library, next) => {
  displayBookProperties();
  const property = prompt('enter property: ');
  const value = prompt('enter value: ');

  library
    .filterBooksBy(property, value)
    .then(console.table)
    .then(() => next(library));
};

const filterAvailableBooks = (library, next) => {
  displayBookProperties();
  const property = prompt('enter property: ');
  const value = prompt('enter value: ');

  library
    .filterAvailableBooksBy(property, value)
    .then(console.table)
    .then(() => next(library));
};

const userHistory = (library, next) => {
  const userId = prompt('user id: ');
  library
    .filterLogs('library_user_id', userId)
    .then(console.table)
    .then(() => next(library));
};

const listAllBooks = (library, next) => {
  get('getBooks', library, next);
};

const listAllAvailableBooks = (library, askChoice) => {
  get('getAvailableBooks', library, askChoice);
};

const exitMessage = () => {
  console.log('Thank you... for visiting.');
};

module.exports = {
  listAllBooks,
  listAllAvailableBooks,
  filterBooks,
  filterAvailableBooks,
  userHistory,
  get,
  exitMessage,
};
