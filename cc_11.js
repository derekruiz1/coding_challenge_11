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
        this.borrowedBooks.pop(book)
    }
}

//Task 2 - Test Data

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);