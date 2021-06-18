const accounts = require("../../test/fixtures/accounts.fixture");
const authors = require("../../test/fixtures/authors.fixture");
const books = require("../../test/fixtures/books.fixture");

function getTotalBooksCount(books) {
    // function(array) -> number
    // - consumes: booksArray
    // - returns: numberOfBooks
    const numberOfBooks = books.length;
    console.log(numberOfBooks)
    return numberOfBooks;
}

function getTotalAccountsCount(accounts) {
    // function(array) -> number
    // - consumes: accountsArray
    // - returns: numberOfAccounts
    const numberOfAccounts = accounts.length;
    return numberOfAccounts;
}

function getBooksBorrowedCount(books){
    // function(array) -> number
    // - consumes: booksArray
    // - returns: numberOfBooksCheckedOut
    const booksCheckedOut = books.filter((book) => {
	return book.borrows[0].returned === false;
    }).length;

    return booksCheckedOut;
}

function _booksEntriesObjectToArray(bookEntriesObject) {
    // function(object) -> array
    // - consumes: booksEntriesObject
    // - returns: sortedTruncatedBookEntriesArray
    //
    // Consumes a bookEntriesObject, and...
    // 1. transforms { { name, count}, ...objN } -> [ [ name, count ], ...arrN ]
    // 2. sorts the array entries, by count, in ascending order
    // 3. generates a new array, and maps array entry elements into new objects in the array
    // 4. returns the top 5 entries in the new array
    const bookEntriesObjectToArray = Object.entries(bookEntriesObject)
	  .sort(([str1, num1],[str2, num2]) => {
	      return num2 - num1;
	  }).map((entry) => {
	      const name = entry[0];
	      const count = entry[1];
	      const object = { name, count };

	      return object;
	  }).slice(0,5);
    
    return bookEntriesObjectToArray;
}


function getMostCommonGenres(books) {
    // function(array) -> array
    // - consumes: booksArray
    // - returns: popularGenres

    // Generates an object of sub-objects of form...
    // {
    //   { genre, count }
    //   ...
    // }
    const generateGenresByCountObject = books.reduce((acc, { genre }) => {
	acc[genre]
	    ? acc[genre] += 1
	    : acc[genre] = 1
	return acc;
    },{})

    // See Helper Function definition above this
    // this function definition.
    return _booksEntriesObjectToArray(generateGenresByCountObject);
}

function getMostPopularBooks(books) {
    // function(array) -> array
    // - consumes: booksArray
    // - returns: popularBooks
    const generateBorrowCountsByBookObject = books.reduce((acc, { title, borrows }) => {
	const count = borrows.length;
	acc[title] = 0;
	acc[title] += count;
	return acc;
    },{});

    return _booksEntriesObjectToArray(generateBorrowCountsByBookObject);
}

function getMostPopularAuthors(books, authors) {
    // function(array, array) -> array
    // - consumes: booksArray, authorsArray
    // - returns: popularAuthors
    //
    // EXPECTED: It returns an array containing five objects or fewer that
    //           represents the most popular authors whose books have been
    //           checked out the most.
    //
    //           Popularity is represented by finding all of the books written
    //           by the author and then adding up the number of times those books
    //           have been borrowed.
    const generateBorrowsByAuthorId = books.reduce((acc, { authorId, borrows }) => {
	const count = borrows.length;
	acc[authorId] = count
	return acc;
    },{})

    const sortAuthorsByBorrows = Object.entries(generateBorrowsByAuthorId).sort(([str1, num1],[str2, num2]) => {
     	return num2 - num1;
    });
    
    return sortAuthorsByBorrows.reduce((acc, entry) => {
	const authorId = Number(entry[0]);
	const count = entry[1];
	for (let author of authors) {
	    const { id, name: { first, last } } = author;
	    let name = `${first} ${last}`;
	    if (authorId === id) {
		const object = { name, count };
		acc.push(object);
	    }
	}
	return acc;
    },[]).slice(0,5);    
}

module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
};
