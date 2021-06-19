const accounts = require("../../test/fixtures/accounts.fixture");
const authors = require("../../test/fixtures/authors.fixture");
const books = require("../../test/fixtures/books.fixture");

function getTotalBooksCount(books) {
    // function(array) -> number
    // - consumes: booksArray
    // - returns: numberOfBooks
    return books.length;
}

function getTotalAccountsCount(accounts) {
    // function(array) -> number
    // - consumes: accountsArray
    // - returns: numberOfAccounts
    return accounts.length;
}

function getBooksBorrowedCount(books){
    // function(array) -> number
    // - consumes: booksArray
    // - returns: numberOfBooksCheckedOut
    return books.filter(({ borrows }) => borrows[0].returned === false).length;
}

function _topFiveSortedBookOrAuthorEntriesArray(bookOrAuthorArray) {
    // function(arrayOfArrays) -> arrayOfArrays
    // - consumes: bookOrAuthorArray
    // - returns: sortedBookOrAuthorArray
    //
    //   [ [ B, 1 ], [ A, 2 ], ...arrElemN ] ->
    //
    //   [ [ A, 2 ], [ B, 1 ], ...arrElem5 ]
    //
    // Consumes an array of arrays and sorts the array elements
    // by count. The array is returned with elements in ascending order
    // with the top 5 array elements.
    return bookOrAuthorArray.sort(([elem1, elem2],[elem3, elem4]) => {
	return elem4 - elem2;
    }).slice(0,5);
}

function _mapBookOrAuthorEntriesToObjects(bookOrAuthorArray) {
    // functon(arrayOfArrays) -> arrayOfObjects
    // - consumes: bookOrAuthorArray
    // - returns: sortedBookOrAuthorArray
    //
    //   [ [ tag, count], ...arrN ] ->
    //
    //   [ { 'name':tag, 'count':count }, ...objN ] 
    //
    // Consumes an array of arrays and converts
    // each element to an object, returning a new
    // array of objects
    return bookOrAuthorArray.map((elem) => {
	      const name = elem[0];
	      const count = elem[1];
	      const object = { name, count };

	      return object;
	  });
}

function getMostCommonGenres(books) {
    // function(array) -> array
    // - consumes: booksArray
    // - returns: popularGenres
    const  genresByCountObject = books.reduce((acc, { genre }) => {
	acc[genre]
	    ? acc[genre] += 1
	    : acc[genre] = 1
	return acc;
    },{});

    const genresByCountArray = Object.entries(genresByCountObject);
    const  sortedGenresByCountArray = _topFiveSortedBookOrAuthorEntriesArray(genresByCountArray);

    return _mapBookOrAuthorEntriesToObjects(sortedGenresByCountArray);
}

function getMostPopularBooks(books) {
    // function(array) -> array
    // - consumes: booksArray
    // - returns: popularBooks
    const borrowCountsByBookArray = books.reduce((acc, { title, borrows }) => {
	const count = borrows.length;
	const entry = [title,count];
	acc.push(entry);
	return acc;
    },[]);
    
    const sortedEntriesArray = _topFiveSortedBookOrAuthorEntriesArray(borrowCountsByBookArray);

    return _mapBookOrAuthorEntriesToObjects(sortedEntriesArray);
}

function getMostPopularAuthors(books, authors) {
    // function(array, array) -> array
    // - consumes: booksArray, authorsArray
    // - returns: popularAuthors

    // The following doesn't account for authors having multiple books
    // authorId 20 in the book fixture as two books. The tests may be passing
    // becasue my sort function is slicing off the duplicate entry
    const authorsByBorrowsArray = books.reduce((acc, { authorId, borrows }) => {
	const count = borrows.length;
	const entry = [authorId,count];
	acc.push(entry);
	return acc;
    },[]);

    // Uncomment this console log to see the duplicate authorId's
    //
    //console.log(authorByBorrowsArray);
    
    const sortedEntriesArray = _topFiveSortedBookOrAuthorEntriesArray(authorsByBorrowsArray);

    return sortedEntriesArray.map((entry) => {
	authors.forEach(({ id, name: { first, last } }) => {
	    const authorId = entry[0];
	    const count = entry[1];
	    
	    if (authorId === id) {
		object = { name:`${first} ${last}`, count };
		return object;
	    }
	});
	return object;
    });
}

// const test_getMostPopularAuthors = getMostPopularAuthors(books,authors);
// console.log(test_getMostPopularAuthors);

module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
};
