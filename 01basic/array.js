// Initial array of numbers
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbersArray); // [1, 2, 3, 4, 5, 6, 7, 8]

// Pop removes the last element
numbersArray.pop();
// Push adds a new element to the end
numbersArray.push("hello");
// Shift removes the first element
numbersArray.shift();
// Unshift adds a new element to the start
numbersArray.unshift("hello");

console.log(numbersArray); // ["hello", 2, 3, 4, 5, 6, 7, "hello"]
console.log(numbersArray.includes(9)); // Check if the array includes 9: false
console.log(numbersArray.indexOf(4)); // Find the index of the first occurrence of 4: 3

// Join converts the array to a string with elements separated by "-"
const joinedArray = numbersArray.join("-");
console.log(joinedArray); // "hello-2-3-4-5-6-7-hello"

console.log("Original array:", numbersArray); // ["hello", 2, 3, 4, 5, 6, 7, "hello"]

// Slice creates a shallow copy of a portion of the array
const slicedArray = numbersArray.slice(1, 3);
console.log("Sliced array:", slicedArray); // [2, 3]

console.log("Original array after slice:", numbersArray); // ["hello", 2, 3, 4, 5, 6, 7, "hello"]

// Array of strings
const heroesArray1 = ["Shakti", "Splash", "Avenger"];
const heroesArray2 = new Array("Hero", "Maan", "Spider");

// Concat merges two arrays into a new array
const mergedArray = heroesArray1.concat(heroesArray2);
// Spread operator to merge two arrays
const spreadMergedArray = [...heroesArray1, ...heroesArray2];
console.log("Merged array using concat:", mergedArray); // ["Shakti", "Splash", "Avenger", "Hero", "Maan", "Spider"]
console.log("Merged array using spread:", spreadMergedArray); // ["Shakti", "Splash", "Avenger", "Hero", "Maan", "Spider"]

// Flattening an array
const nestedArray = [1, 2, 3, [4, 5, 6], [7, [8, 9, 10]]];
const flatArray = nestedArray.flat(Infinity);
console.log("Flattened array:", flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Other useful array methods
// Reverse the order of elements
const reversedArray = flatArray.reverse();
console.log("Reversed array:", reversedArray); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Filter to create a new array with elements that pass the test
const filteredArray = flatArray.filter((number) => number > 5);
console.log("Filtered array (elements > 5):", filteredArray); // [10, 9, 8, 7, 6]

// Map to create a new array with the results of calling a function on every element
const mappedArray = flatArray.map((number) => number * 2);
console.log("Mapped array (elements * 2):", mappedArray); // [20, 18, 16, 14, 12, 10, 8, 6, 4, 2]

// Reduce to accumulate a single value
const sumOfArray = flatArray.reduce((acc, current) => acc + current, 0);
console.log("Sum of array elements:", sumOfArray); // 55

// Find the first element that satisfies the condition
const foundElement = flatArray.find((number) => number > 5);
console.log("First element > 5:", foundElement); // 10

// Find the index of the first element that satisfies the condition
const foundIndex = flatArray.findIndex((number) => number > 5);
console.log("Index of first element > 5:", foundIndex); // 0

// Check if all elements satisfy the condition
const allGreaterThanZero = flatArray.every((number) => number > 0);
console.log("All elements > 0:", allGreaterThanZero); // true

// Check if some elements satisfy the condition
const someGreaterThanEight = flatArray.some((number) => number > 8);
console.log("Some elements > 8:", someGreaterThanEight); // true
