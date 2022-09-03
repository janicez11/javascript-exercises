const getTheTitles = function(books) {
    let array = [];
    for ( let i = 0; i < books.length; i++) {
        const bookTitle = books[i].title;
        array.push(bookTitle);
    }
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
