let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, Read? : ${this.read}`
}

function addBookToLibrary(...args) {
    const book = new Book(...args)
    myLibrary.push(book)
    console.log(book.__proto__)
    
    console.log("This book is added: " + book.info())
}

addBookToLibrary('Roots', 'Alex Haley', '500', 'Yes')
addBookToLibrary('Sapiens', 'Yuval Noah Harari', '300', 'No')
addBookToLibrary('The Road Less Travelled', 'M. Scott Peck', '200', 'Yes')


console.log(myLibrary)
console.log(Book.prototype)

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')

// console.log(theHobbit.info())