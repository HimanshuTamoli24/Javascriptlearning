// Activity 1: Basic Closure

// Task 1: Write a function that returns another function,
// where the inner function accesses a variable from the outer function's scope.
// Call the inner function and log the result.
function outerFunction() {
  var outerVariable = "Hello";
  function innerFunction() {
    return outerVariable + ", World!";
  }
  return innerFunction;
}

var inner = outerFunction();
console.log(inner()); // Output: Hello, World!

// Task 2: Create a closure that maintains a private counter.
// Implement functions to increment and get the current value of the counter.
function createCounter() {
  var counter = 0;
  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}

var counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2

// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs.
// Use a closure to keep track of the last generated ID and increment it with each call.
function createIDGenerator() {
  var lastID = 0;
  return function () {
    lastID++;
    return lastID;
  };
}

var generateID = createIDGenerator();
console.log(generateID()); // Output: 1
console.log(generateID()); // Output: 2

// Task 4: Create a closure that captures a user’s name
// and returns a function that greets the user by name.
function createGreeter(name) {
  return function () {
    return "Hello, " + name + "!";
  };
}

var greetJohn = createGreeter("John");
console.log(greetJohn()); // Output: Hello, John!

// Activity 3: Closures in Loops

// Task 5: Write a loop that creates an array of functions.
// Each function should log its index when called.
// Use a closure to ensure each function logs the correct index.
function createLoggingFunctions() {
  var functions = [];
  for (var i = 0; i < 5; i++) {
    (function (index) {
      functions.push(function () {
        console.log(index);
      });
    })(i);
  }
  return functions;
}

var logFunctions = createLoggingFunctions();
logFunctions[0](); // Output: 0
logFunctions[1](); // Output: 1

// Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items.
// Implement methods to add, remove, and list items.
var itemModule = (function () {
  var items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      var index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    },
    listItems: function () {
      return items;
    },
  };
})();

itemModule.addItem("Apple");
itemModule.addItem("Banana");
console.log(itemModule.listItems()); // Output: ['Apple', 'Banana']
itemModule.removeItem("Apple");
console.log(itemModule.listItems()); // Output: ['Banana']

// Activity 5: Memoization

// Task 7: Create a memoized version of a function that computes factorials.

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function memoize(func) {
  // Cache to store results
  const cache = {};

  return function(arg) {
    // Check if result is already in the cache
    if (cache[arg] !== undefined) {
      return cache[arg];
    }

    // Compute and store the result in the cache
    const result = func(arg);
    cache[arg] = result;

    return result;
  };
}

// Memoized version of factorial
const memoizedFactorial = memoize(factorial);

// Example usage
console.log(memoizedFactorial(5));  // Outputs: 120
console.log(memoizedFactorial(6));  // Outputs: 720
console.log(memoizedFactorial(5));  // Outputs: 120 (from cache)
