// Singleton Pattern and Object Literals

// Creating a unique symbol for property keys
const uniqueSymbol = Symbol("uniqueKey");

// Creating an object with symbol and regular properties
const userDetails = {
  [uniqueSymbol]: "specialValue",
  name: "Arnav",
  age: 19,
  location: "Delhi",
};

// Accessing properties
console.log("Name:", userDetails.name); // Output: Name: Arnav
console.log("Symbol Value:", userDetails[uniqueSymbol]); // Output: Symbol Value: specialValue

// Modifying properties
userDetails.age = "3";
console.log("Updated Age:", userDetails.age); // Output: Updated Age: 3
// Adding new methods to the object
userDetails.greet = function () {
  console.log("Hello, user!");
};
userDetails.personalizedGreeting = function () {
  console.log(`Hello, ${this.name}!`);
};

// Freezing the object to prevent further modifications
Object.freeze(userDetails);

// Checking if methods are available before calling
if (typeof userDetails.greet === "function") {
  userDetails.greet(); // Output: Hello, user!
} else {
  console.log("greet method is not available.");
}

if (typeof userDetails.personalizedGreeting === "function") {
  userDetails.personalizedGreeting(); // Output: Hello, Arnav!
} else {
  console.log("personalizedGreeting method is not available.");
}

// Example with another object
const tinderUserProfile = {};

// Adding properties to the object
tinderUserProfile.id = "123abc";
tinderUserProfile.name = "Yoim";
tinderUserProfile.isLoggedIn = false;

// Logging the Tinder user profile
console.log("Tinder User Profile:", tinderUserProfile);

// Example with nested objects
const userProfile = {
  email: "arnav@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Arnav",
      lastName: "Kumar",
    },
  },
};

// Accessing nested properties
console.log("User Profile:", userProfile, "\n");
console.log("Full Name Object:", userProfile.fullName, "\n");
console.log("User Full Name Object:", userProfile.fullName.userFullName, "\n");
console.log("Last Name:", userProfile.fullName.userFullName.lastName, "\n");

// Merging objects
const object1 = { 1: "a", 2: "b" };
const object2 = { 3: "c", 4: "d" };

// Merging objects using Object.assign
const mergedObject1 = Object.assign({}, object1, object2);
console.log("Merged Object using Object.assign:", mergedObject1);

// Merging objects using spread operator
const mergedObject2 = { ...object1, ...object2 };
console.log("Merged Object using Spread Operator:", mergedObject2);

// Array of user objects
const usersArray = [
  { id: 1, email: "user1@example.com" },
  { id: 2, email: "user2@example.com" },
  { id: 3, email: "user3@example.com" },
  { id: 4, email: "user4@example.com" },
  { id: 5, email: "user5@example.com" },
];

// Accessing an email from the array
const secondUserEmail = usersArray[1].email;
console.log("Second User Email:", secondUserEmail); // Output: Second User Email: user2@example.com

// Object properties and methods
console.log("Tinder User Profile:", tinderUserProfile);
console.log("Object Keys:", Object.keys(tinderUserProfile));
console.log("Object Values:", Object.values(tinderUserProfile));
console.log("Has 'age' Property:", tinderUserProfile.hasOwnProperty("age"));
console.log("Object Entries:", Object.entries(tinderUserProfile));

// Destructuring assignment example
const courseDetails = {
  courseName: "JavaScript",
  price: "100",
  instructor: "Himanshu",
};

// Destructuring to extract instructor property
const { instructor: instructorName } = courseDetails;
console.log("Instructor Name (using destructuring):", instructorName); // Output: Instructor Name (using destructuring): Himanshu
