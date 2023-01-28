let myLibrary = []
const books = document.querySelector('.books')
const addNew = document.querySelector('#addnewbook')
const submit = document.querySelector('#submit')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('#close-modal')
const form = document.querySelector('.bookform')

// Create book class
class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

function addBookToLibrary(...args) {
    // Create new book object with input data as arguments
    const book = new Book(...args)
    
    // Add book to lib
    myLibrary.push(book)    
        
    // Create divs for book container and book fields
    const newBook = document.createElement('div')
    const newTitle = document.createElement('div')
    const newAuth = document.createElement('div')
    const newPages = document.createElement('div')
    const newRead = document.createElement('div')
    const delBook = document.createElement('button')
    const changeRead = document.createElement('button')
    
    // Set class on book container
    newBook.className = 'book'
    
    newTitle.className = 'new-title'
    newTitle.textContent = `Title : ${book.title}`

    newAuth.className = 'new-auth'
    newAuth.textContent = `Author : ${book.author}`

    newPages.className = 'new-pages'
    newPages.textContent = `Pages : ${book.pages}`

    newRead.className = 'new-read'
    newRead.textContent = `Read? : ${book.read}`
    
    delBook.textContent = 'Delete book'
    changeRead.textContent = 'Change Read Status'

    // Arm Delete button 
    delBook.addEventListener('click', () => {
        console.log(`Deleted ${book.title} from Lib`)        
        // Remove book from myLibrary array
        myLibrary.splice(myLibrary.indexOf(book), 1)
        // Remove book from view
        books.removeChild(newBook)
    })

    // Arm Change Read Status button
    changeRead.addEventListener('click', () => {
        if (book.read.toLowerCase() == 'y') {
            book.read = 'n'
            newRead.textContent = `Read? : ${book.read}`
        } else {
            book.read = 'y'
            newRead.textContent = `Read? : ${book.read}`
        }
    })

    newRead.style.paddingBottom = "5px"

    // Append book divs to book container
    newBook.appendChild(newTitle)
    newBook.appendChild(newAuth)
    newBook.appendChild(newPages)
    newBook.appendChild(newRead)
    newBook.appendChild(delBook)
    newBook.appendChild(changeRead)
    
    newBook.style.fontSize = "18px"
    newBook.style.padding = "20px"

    // Append book container to books container
    books.appendChild(newBook)
}

// Button to add new book
addNew.addEventListener('click', () => {
    // Made form modal appear
    modal.style.display = 'block'
})

// Button to submit new book data
submit.addEventListener('click', (e) => {
    // Check form validation
    if (form.checkValidity() === true) {
        e.preventDefault()
        
        // Make form modal disappear
        modal.style.display = 'none'
        
        // Grab form nodes receiving input data
        const title = document.querySelector('#title')
        const author = document.querySelector('#author')
        const pages = document.querySelector('#pages')
        const read = document.querySelector('#read')
        
        // Call addBookToLibrary function with form node values as parameters
        addBookToLibrary(title.value, author.value, pages.value, read.value)
        
        // Clear fields for next submission
        title.value = author.value = pages.value = read.value = ''    
    }
})

closeModal.addEventListener('click', () => {
    // Made form modal appear
    modal.style.display = 'none'
})
