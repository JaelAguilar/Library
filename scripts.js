let myLibrary = [];

let inputBookName = document.querySelector("#bookName")
let inputBookAuthor = document.querySelector("#bookAuthor")
let inputBookPages = document.querySelector("#bookPages")

class Book {
    constructor(name, author, pages, isRead) {
        this.name = name;
        console.log(name, '=>',this,this.name)
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
    info= () => {
        return `${this.name}, ${this.author},${this.pages},${this.isRead}`
    }
}

function addBookToLibrary(book) {
    console.log(inputBookName.value,inputBookAuthor.value,inputBookPages.value)
}


bookTest = new Book("hobbit", "JR tolkien", "500", false);
