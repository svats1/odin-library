let myLibrary = []
const books = document.querySelector('.books')
const addNew = document.querySelector('#addnewbook')
const closeBtn = document.querySelector('#close')
const modal = document.querySelector('.modal')

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, Read? : ${this.read}`
    }
}


function addBookToLibrary(...args) {
    const book = new Book(...args)
    myLibrary.push(book)    
    console.log("This book is added: " + book.info())
}

addBookToLibrary('Roots', 'Alex Haley', '500', 'Yes')
addBookToLibrary('Sapiens', 'Yuval Noah Harari', '300', 'No')
addBookToLibrary('The Road Less Traveled', 'M. Scott Peck', '200', 'Yes')


addNew.addEventListener('click', () => {
    modal.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})


for (i in myLibrary) {
    const book = document.createElement('div')
    book.className = 'book'
    book.textContent = myLibrary[i].title
    books.appendChild(book)
}
