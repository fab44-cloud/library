const myLibrary = []; // Array to store book objects

function Book(title, author, pages, read) {
  // the constructor...
  this.id = crypto.randomUUID;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
  console.log("New book added:", newBook);
}

addBookToLibrary("Harry Potter and the Sorcerers Stone", "J.K. Rowling",
    309, true);

console.log("Current library:", myLibrary);
