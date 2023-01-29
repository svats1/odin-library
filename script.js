let myLibrary = []
const books = document.querySelector('.books')
const addNew = document.querySelector('#addnewbook')
const submit = document.querySelector('#submit')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('#close-modal')
const form = document.querySelector('.bookform')
const totalBooks = document.querySelector('.total-books')
const readBooks = document.querySelector('.read-books')
const unreadBooks = document.querySelector('.unread-books')

// Create book class
class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

function updateBooks() {
    let readCount = 0
    let unreadCount = 0

    totalBooks.textContent = `Total : ${myLibrary.length}`
    readBooks.textContent = `Read : ${readCount}`
    unreadBooks.textContent = `Unread : ${unreadCount}`

    for (i in myLibrary) {
        if (myLibrary[i].read == 'y') {
            readCount++
            readBooks.textContent = `Read : ${readCount}`
        } else {
            unreadCount++
            unreadBooks.textContent = `Unread : ${unreadCount}`
        }
    }
}

function addBookToLibrary(...args) {
    // Create new book object with input data as arguments
    const book = new Book(...args)
    
    // Add book to lib
    myLibrary.push(book)
    // Update tally after addition
    updateBooks()    
        
    // Create divs for book container and book fields
    const newBook = document.createElement('div')
    const newTitle = document.createElement('div')
    const newAuth = document.createElement('div')
    const newPages = document.createElement('div')
    const newRead = document.createElement('div')
    const delBook = document.createElement('button')
    const changeRead = document.createElement('button')
    
    // Set attibutes for all book fields
    newBook.className = 'book'
    
    newTitle.className = 'new-title'
    newTitle.textContent = `Title : ${book.title}`
    
    newAuth.className = 'new-auth'
    newAuth.textContent = `Author : ${book.author}`

    newPages.className = 'new-pages'
    newPages.textContent = `Pages : ${book.pages}`

    newRead.className = 'new-read'
    newRead.textContent = `Read? : ${book.read.toLowerCase()}`
     
    delBook.textContent = 'Delete book'
    delBook.style.borderRadius = '5px'
    
    changeRead.textContent = 'Change Read Status'
    changeRead.style.borderRadius = '5px'

    // Arm Delete button 
    delBook.addEventListener('click', () => {
        // Remove book from myLibrary array
        myLibrary.splice(myLibrary.indexOf(book), 1)
        // Update tally after deletion
        updateBooks()
        
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
        // Update tally after read status change
        updateBooks()
    })

    // Append book fields to book container
    newBook.appendChild(newTitle)
    newBook.appendChild(newAuth)
    newBook.appendChild(newPages)
    newBook.appendChild(newRead)
    newBook.appendChild(delBook)
    newBook.appendChild(changeRead)

    // Style book container
    newRead.style.paddingBottom = "5px"    
    newBook.style.fontSize = "18px"
    newBook.style.padding = "20px"
    newBook.style.borderRadius = "10px"
    newBook.style.backgroundColor = "azure"

    // Append book container to books
    books.appendChild(newBook)
}

// Update tally on page load
updateBooks()


// Show modal for new book
addNew.addEventListener('click', () => {
    // Made form modal appear
    modal.style.display = 'block'
})

// Submit modal form data
submit.addEventListener('click', (e) => {
    // Check form validation
    if (form.checkValidity() === true) {
        e.preventDefault()
        
        // Make form modal disappear
        modal.style.display = 'none'
        
        // Grab nodes receiving input data
        const title = document.querySelector('#title')
        const author = document.querySelector('#author')
        const pages = document.querySelector('#pages')
        const read = document.querySelector('#read')
        
        // Call addBookToLibrary with node values as args
        addBookToLibrary(title.value, author.value, pages.value, read.value)
        
        // Clear nodes for next submission
        title.value = author.value = pages.value = read.value = ''    
    }
})

// Close modal
closeModal.addEventListener('click', () => {
    // Made form modal appear
    modal.style.display = 'none'
})

// Sample books:
// addBookToLibrary('Cosmos', 'Carl Sagan', '300', 'n')
// addBookToLibrary('Deep Work', 'Cal Newport', '250', 'y')
// addBookToLibrary('Roots', 'Alex Haley', '500', 'y')