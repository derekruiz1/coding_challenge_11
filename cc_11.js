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
