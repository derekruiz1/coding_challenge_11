//Task 1 - Creating A Book Class
class Book {
    constructor(title, author, isbn, copies) { //Creating Book Class
        this.title = title,
        this.author = author,
        this.isbn = isbn,
        this.copies = copies
    } 
    getDetails(){ //Showing detaiils of book
    return (`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies ${this.copies}`)
    } 
    updateCopies(quantity){ //Adds or subtracts number of copies of the book
    return (this.copies += quantity)
    }
}

//Task 1 Test Data
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());

book1.updateCopies(-1);
console.log(book1.getDetails());

//Task 2 - Creating a Borrower Class
class Borrower { //Created A borrower class
    constructor(name, borrowerId, borrowedBooks) {
        this.name = name,
        this.borrowerId = borrowerId
        this.borrowedBooks = []
    }
    borrowBook(book){ //Tracks books that are checked out
        this.borrowedBooks.push(book)
    }
    returnBook(book){ //Tracks books that are returned 
        this.borrowedBooks.splice(book)
    }
}

//Task 2 - Test Data

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

//Task 3 - Creating a Library Class
class Library { //Creating a library class
    constructor(books, borrowers) {
        this.books = [],
        this.borrowers = []
    }
    addBook(book){ //Adds book to library
        this.books.push(book)
    }
    listBooks(){ //Lists book inside library
        this.books.forEach(book => 
            console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Copies ${book.copies}`))
    }
//Task 4 - Implementing Book Borrowing 
    lendBook(borrowerId, isbn){
        const book = this.books.find(book => book.isbn === isbn)
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId)

        if (book && borrower && book.copies > 0) { //Checking for both book and borrower
            book.updateCopies(-1) //Reducing copies of book
            borrower.borrowBook(book.title) //Logging book
        }
    }
}
//Task 3 - Test Data

const library = new Library();
library.addBook(book1);
library.listBooks();

//Task 4 - Test Data 
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]