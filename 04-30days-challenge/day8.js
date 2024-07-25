// Activity 1: Template Literals

// Task 1: Create a string using template literals
let name = "Alice";
let age = 30;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);

// Task 2: Create a multi-line string using template literals
let multiLineMessage = `This is a multi-line string.
It spans multiple lines
using template literals.`;
console.log(multiLineMessage);

// Activity 2: Destructuring

// Task 3: Use array destructuring
let numbers = [10, 20, 30, 40];
let first = numbers[0];
let second = numbers[1];
console.log(first, second);

// Task 4: Use object destructuring
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
let { title, author } = book;
console.log(title, author);

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator
let existingArray = [1, 2, 3];
let newArray = [...existingArray, 4, 5, 6];
console.log(newArray);

// Task 6: Use the rest operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22

// Activity 4: Default Parameters

// Task 7: Function with default parameters
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5

// Activity 5: Enhanced Object Literals

// Task 8: Create an object with methods and properties
let person = {
  name: "Bob",
  age: 25,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
console.log(person);
person.greet();

// Task 9: Create an object with computed property names
let propName = "status";
let propValue = "active";
let user = {
  id: 1,
  [propName]: propValue,
};
console.log(user);
