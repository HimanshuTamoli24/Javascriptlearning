// Import required modules
const axios = require("axios");
const allobject = require("./day13.1");

// Test the functions and variables
console.log(allobject.add(2, 4));
console.log(allobject.sub(2, 4));
console.log(allobject.person.name);
console.log(allobject.circleArea(4));
console.log(allobject.E); // Task 11

// Reverse an array using lodash
const loadash = require("lodash");
let array = [1, 2, 3, 4];
let reversedArray = loadash.reverse(array.slice());
console.log(reversedArray);

// Make a GET request with axios
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log(response.data);
    return response.data;
  })
  .then((data) => {
    console.log(data.id);
    console.log(data.body);
  })
  .then(() => {
    console.log("it work");
  })
  .catch((error) => {
    console.error(error);
  });
