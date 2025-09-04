class Book {
    constructor(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    toggleReadStatus() {
        this.read = !this.read;
    }
}

let myLibrary = []; // Array to store book objects

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook)
  console.log(myLibrary);
  console.log("New book added:", newBook);
}

function removeBook(bookIdToRemove) {
    // Filter the array to create a new array without the book to remove
    myLibrary = myLibrary.filter(book => book.id !== bookIdToRemove);
    displayBooks();
}

// Manually add books to test the display
addBookToLibrary("Harry Potter and the Sorcerers Stone", "J.K. Rowling", 309, true);
addBookToLibrary("Harry Potter and Chamber of Secrets", "J.K. Rowling", 344, false);
addBookToLibrary("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", 437, false);
addBookToLibrary("Harry Potter and the Goblet of Fire", "J.K. Rowling", 740, false);
addBookToLibrary("Harry Potter and the Order of the Phoenix", "J.K. Rowling", 877, false);
addBookToLibrary("Harry Potter and the Half-Blood Prince", "J.K. Rowling", 652, false);
addBookToLibrary("Harry Potter and the Deathly Hallows", "J.K. Rowling", 766, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);

function displayBooks() {
    const bookDisplay = document.querySelector(".book-display");
    // Clear previous display to avoid duplication
    bookDisplay.innerHTML = "";

    myLibrary.forEach((book, index) => {
        
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const title = document.createElement("h2");
        title.textContent = book.title;
        
        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;

        const readStatus = document.createElement("p");
        readStatus.textContent = `Read: ${book.read ? "Yes" : "No"}`;

        const removeBtn = document.createElement("button");
        removeBtn.classList.add('remove-book-btn');
        removeBtn.textContent = "Remove Book";
        // Store the book's unique ID as a data-attribute on the card
        removeBtn.dataset.bookId = book.id;

        const readStatusBtn = document.createElement("button");
        readStatusBtn.classList.add('read-status-btn');
        readStatusBtn.textContent = book.read ? "Mark as unread" : "Mark as read";
        readStatusBtn.dataset.bookIndex = index;
        
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readStatus);
        bookCard.appendChild(removeBtn);
        bookCard.appendChild(readStatusBtn);
        
        bookDisplay.appendChild(bookCard);
    });    
}

// --- Form and Button Logic ---
const dialog = document.querySelector("dialog");
const newBookBtn = document.querySelector(".new-book");
const cancelBtn = document.querySelector(".closeBtn");
const bookForm = document.querySelector(".bookForm");

// Show the dialog when the "New book" button is clicked
newBookBtn.addEventListener("click", () => {
    bookForm.reset(); // Clear form fields when opening dialog
    dialog.showModal();
});

// Close the dialog when the "Cancel" button is clicked
cancelBtn.addEventListener("click", () => {
    bookForm.reset(); // Clear form fields when closing dialog
    dialog.close();
});

// Handle form submission
bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get values from the form inputs
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    addBookToLibrary(title, author, pages, read);

    displayBooks();

    dialog.close();
    
});

// Handle remove button
const bookDisplay = document.querySelector(".book-display");

bookDisplay.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-book-btn")) {
        const bookIdToRemove = event.target.dataset.bookId;
        console.log(bookIdToRemove);
        removeBook(bookIdToRemove);
    }

    // Handle read status button
    else if (event.target.classList.contains("read-status-btn")) {
        const bookIndex = event.target.dataset.bookIndex;
        const book = myLibrary[bookIndex];
        book.toggleReadStatus();
        displayBooks();
    }        
});

displayBooks();