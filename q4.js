// Sample list of books with authors and publication years
var books = [
    { title: "Book 1", author: "author 1", year: 2005 },
    { title: "Book 2", author: "author 2", year: 2015 },
    { title: "Book 3", author: "author 3", year: 2012 },
    { title: "Book 4", author: "author 4", year: 2009 },
];

// Function to filter books published after 2010 and capitalize author names
function filterAndCapitalize(books) {
    return books.filter(book => book.year > 2010)
                .map(book => {
                    return {
                        title: book.title,
                        author: book.author.toUpperCase(),
                        year: book.year
                    };
                });
}

var filteredBooks = filterAndCapitalize(books);


console.log("Filtered Books:", filteredBooks);
