// Check if a number is even or odd
function checkNum(num) {
  if (num % 2 === 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
  return num;
}
checkNum(7); // Output: odd number

// Return the square of a number
function squareNum(num) {
  return num * num;
}
let result = squareNum(9);
console.log(result); // Output: 81

// Sum two numbers using arrow function
let sumOfNum = (num1, num2) => {
  return num1 + num2;
};
console.log(sumOfNum(4, 5)); // Output: 9

// Concatenate strings using rest parameters
let concateString = (str1, ...str2) => {
  return str1 + str2.join("");
};
console.log(concateString("two", "four")); // Output: twofour

// Activity 4: Function Parameters and Default Values

// Task 7: Multiply two numbers with a default value for the second parameter
function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 2)); // Output: 10

// Task 8: Greet with name and default age
function greet(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}
console.log(greet("Alice", 30)); // Output: Hello, my name is Alice and I am 30 years old.
console.log(greet("Bob")); // Output: Hello, my name is Bob and I am unknown years old.

// Activity 5: Higher-Order Functions

// Task 9: Call a function a specified number of times
function repeat(func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
}
function sayHello() {
  console.log("Hello!");
}
repeat(sayHello, 3); // Output: Hello! (3 times)

// Task 10: Apply one function to a value and then another function to the result
function compose(func1, func2, value) {
  return func2(func1(value));
}
function add2(num) {
  return num + 2;
}
function multiplyBy3(num) {
  return num * 3;
}
const resultCompose = compose(add2, multiplyBy3, 1); // Output: 18
console.log(resultCompose);
