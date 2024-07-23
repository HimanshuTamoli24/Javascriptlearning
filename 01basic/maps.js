// Array of numbers from 1 to 10
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to get numbers greater than 4
const numbersGreaterThanFour = numbersArray.filter((number) => number > 4);

// Output the numbers greater than 4
console.log("Numbers greater than 4:", numbersGreaterThanFour);

// Using forEach to achieve the same result as filter
const filteredNumbers = [];
numbersArray.forEach((number) => {
  if (number > 4) {
    filteredNumbers.push(number);
  }
});

// Output the filtered numbers using forEach
console.log("Filtered numbers using forEach:", filteredNumbers);

// Mapping numbers to add 10 and then add 1
const updatedNumbers = numbersArray
  .map((number) => number + 10) // Add 10 to each number
  .map((number) => number + 1); // Add 1 to each result

// Output the original array and the updated numbers
console.log("Original numbers array:", numbersArray);
console.log("Updated numbers array:", updatedNumbers);
