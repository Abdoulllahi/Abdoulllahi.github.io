let db = [];
let counter = 0;

module.exports = class Book {

    constructor(id, title, isbn, publishedDate, author) {
        
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        
        this.id = ++counter;
        db.push(this);
        return this;
    }

    edit() {
        
        const index = db.findIndex(book => book.id == this.id);
        db.splice(index, 1, this);
        return this;
    }

    static getAll() {
        return db;
    }

    static deleteById(bookId){
        const index = db.findIndex(book => book.id == bookId);
        const deletedBook = db[index];
        db.splice(index, 1);
        return deletedBook;
    }
}