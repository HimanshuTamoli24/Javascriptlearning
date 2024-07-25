// Activity 1: Initial Book Object
let book = {
  title: "no more",
  author: "me",
  year: 2025,
};

// Task 1: Log initial book details
console.log("Initial book object:", book);
console.log("Title:", book.title);
console.log("Author:", book.author);
console.log(`The book ${book.title} is written by ${book.author}`);

// Task 2: Update the year and log the updated book
book.year = 2026;
console.log("Updated book object:", book);

// Activity 2: Nested Object - Library
let library = {
  name: "City Library",
  books: [
    { title: "Book One", author: "Author A", year: 2022 },
    { title: "Book Two", author: "Author B", year: 2023 },
  ],
};

// Task 3: Log library details
console.log("Library object:", library);
console.log("Library name:", library.name);
console.log("Book titles:");
library.books.forEach((b) => console.log(b.title));

// Activity 3: Method with `this`
book = {
  title: "no more",
  author: "me",
  year: 2025,
  getBookInfo: function () {
    return `Title: ${this.title}, Year: ${this.year}`;
  },
};

// Task 4: Log result of calling method
console.log(book.getBookInfo()); // Output: Title: no more, Year: 2025

// Activity 4: Object Iteration
// Task 5: Iterate over properties using `for...in`
console.log("Book properties using for...in:");
for (let keys in book) {
  if (book.hasOwnProperty(keys)) {
    console.log(`${keys}: ${book[keys]}`);
  }
}

// Task 6: Log all keys and values of the book object
console.log("Book properties using Object.keys and Object.values:");

// Log all keys
console.log("Keys:");
Object.keys(book).forEach((key) => {
  console.log(key);
});

// Log all values
console.log("Values:");
Object.values(book).forEach((value) => {
  console.log(value);
});
