// Example of using a for-of loop with an array
let marks = [40, 60, 40];

for (const mark of marks) {
  console.log(`This is my mark: ${mark}`);
}

// Example of using a Map
const countryMap = new Map();

// Adding key-value pairs to the Map
countryMap.set("IN", "INDIA");
countryMap.set("SRI", "SRI LANKA");
countryMap.set("PAK", "PAKISTAN");

// Display the entire Map
console.log(countryMap);

// Iterating over the Map and logging key-value pairs
for (const [countryCode, countryName] of countryMap) {
  console.log(`${countryCode}: ${countryName}`);
}

// Example of using an object with a for-in loop
const countryObject = {
  IN: "INDIA",
  SRI: "SRI LANKA",
  PAK: "PAKISTAN",
};

// Display the entire object
console.log(countryObject);

// Iterating over the object keys and logging values
for (const countryCode in countryObject) {
  console.log(`${countryCode}: ${countryObject[countryCode]}`);
}

// Example of using an array with a forEach loop
let numbersArray = [1, 2, 3, 5, 8];

// Using forEach to log each number in the array
numbersArray.forEach((number) => {
  console.log(number);
});

// Additional Important Example: Using array.map to transform elements
let transformedArray = numbersArray.map((number) => number * 2);
console.log("Transformed Array:", transformedArray);

// Additional Important Example: Filtering an array based on a condition
let filteredArray = numbersArray.filter((number) => number > 2);
console.log("Filtered Array (numbers greater than 2):", filteredArray);
