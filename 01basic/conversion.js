// Example 1: Converting null to a number
let score = null;
console.log(typeof score); // Output: object

let numericValueFromNull = Number(score);
console.log(typeof numericValueFromNull); // Output: number

// Example 2: Converting undefined to a number
score = undefined;
console.log(typeof score); // Output: undefined

let numericValueFromUndefined = Number(score);
console.log(typeof numericValueFromUndefined); // Output: number

// Example 3: Converting a string to a number
score = "himanshu";
console.log(typeof score); // Output: string

let numericValueFromString = Number(score);
console.log(typeof numericValueFromString); // Output: number

// Operations

// Negation operation
let originalValue = 3;
let negatedValue = -originalValue;
console.log(negatedValue); // Output: -3

// String concatenation
let firstString = "hello";
let secondString = "world";
let concatenatedString = firstString + secondString;
console.log(concatenatedString); // Output: helloworld

// Various arithmetic and string operations
console.log(1 + 2); // Output: 3
console.log("1" + 2); // Output: 12
console.log(1 + "2"); // Output: 12
console.log(1 + 2 + "2"); // Output: 32 (due to string concatenation after numeric addition)
console.log(1 + "2" + 2); // Output: 122
console.log("1" + 2 + 2); // Output: 122
console.log(true); // Output: true
console.log(+true); // Output: 1 (true is coerced to 1)
console.log(1 + true); // Output: 2 (true is coerced to 1)
console.log(2 + true); // Output: 3 (true is coerced to 1)

// Variable assignment and comparison
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // All variables get the value of 4
console.log(num1); // Output: 4
console.log(num2); // Output: 4
console.log(num3); // Output: 4
