const myLibrary = []; // Array to store book objects

function Book(title, author, pages, read) {
  // the constructor...
  this.id = crypto.randomUUID;
  this.title = title; // Assigns 'title' property to the new Book object
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add new book to the library array
function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
  console.log("New book added:", newBook);
}

// Manually add books to test the display
addBookToLibrary("Harry Potter and the Sorcerers Stone", "J.K. Rowling", 309, "Yes");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "No")

function displayBooksToCard() {
    const bookDisplay = document.querySelector(".book-display");
    myLibrary.forEach(book => {
        
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");

        bookDisplay.appendChild(bookCard);

        const title = document.createElement("h2");
        title.textContent = book.title;
        
        bookCard.appendChild(title);

        const author = document.createElement("p");
        author.textContent = book.author;

        bookCard.appendChild(author);

        const pages = document.createElement("p");
        pages.textContent = book.pages;

        bookCard.appendChild(pages);

        const read = document.createElement("p");
        read.textContent = book.read;

        bookCard.appendChild(read);
    });    
}

displayBooksToCard();

