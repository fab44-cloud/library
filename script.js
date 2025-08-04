const myLibrary = []; // Array to store book objects

function Book(title, author, pages, read) {
  // the constructor...
  this.id = crypto.randomUUID();
  this.title = title; // Assigns 'title' property to the new Book object
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add new book to the library array
function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook)
  console.log(myLibrary);
  console.log("New book added:", newBook);
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

function displayBooksToCard() {
    const bookDisplay = document.querySelector(".book-display");
    // Clear previous display to avoid duplication
    bookDisplay.innerHTML = "";

    myLibrary.forEach(book => {
        
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

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readStatus); 
        
        bookDisplay.appendChild(bookCard);
    });    
}


// --- Form and Button Logic ---
const dialog = document.querySelector("dialog");
const newBookBtn = document.querySelector(".new-book");
const cancelBtn = document.querySelector(".closeBtn");
// const confirmBtn = document.querySelector(".confirmBtn");
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
    const title = document.querySelector(".title").value;
    console.log(title);
    const author = document.querySelector(".author").value;
    const pages = document.querySelector(".pages").value;
    const read = document.querySelector(".read").checked;

    // Add the new book to the library array
    addBookToLibrary(title, author, pages, read);

    // Update the display
    displayBooksToCard();

    // Close form after updating the display
    dialog.close();
    
});

displayBooksToCard();