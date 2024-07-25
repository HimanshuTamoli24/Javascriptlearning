// Initialize the array
let array = [1, 2, 3, 4, 5];
console.log("Initial array:", array);

// Log the first and last element of the array
console.log(array[0], ",", array[4]);

// Task 3: Add a new number to the end of the array using push
array.push(6);
console.log("After push:", array);

// Task 4: Remove the last element from the array using pop
array.pop();
console.log("After pop:", array);

// Task 5: Remove the first element from the array using shift
array.shift();
console.log("After shift:", array);

// Task 6: Add a new number to the beginning of the array using unshift
array.unshift(0);
console.log("After unshift:", array);

// Task 7: Create a new array where each number is doubled using map
const doubledArray = array.map((num) => num * 2);
console.log("Doubled array:", doubledArray);

// Task 8: Create a new array with only even numbers using filter
const evenArray = array.filter((num) => num % 2 === 0);
console.log("Even numbers array:", evenArray);

// Task 9: Calculate the sum of all numbers in the array using reduce
const sum = array.reduce((acc, num) => acc + num, 0);
console.log("Sum of array elements:", sum);

// Task 10: Use a for loop to iterate over the array and log each element
console.log("Array elements (for loop):");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element
array.forEach((num) => console.log(num));
console.log("Array elements (forEach):");

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Two-dimensional array (matrix):", matrix);

// Task 13: Access and log a specific element from the two-dimensional array
console.log("Element at matrix[1][2]:", matrix[1][2]); // Output: 6
