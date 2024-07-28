// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Intentionally Throw an Error
function throwError() {
  try {
    throw Error("This is an intentional error");
  } catch (error) {
    console.log("Error caught: " + error.message);
  }
}

throwError();

// Task 2: Division with Error Handling
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    console.log("Error caught: " + error.message);
  }
}

divide(10, 0);

// Activity 2: Finally Block

// Task 3: Try-Catch-Finally
function tryCatchFinally() {
  try {
    console.log("Inside try block");
    throw new Error("Error in try block");
  } catch (error) {
    console.log("Inside catch block: " + error.message);
  } finally {
    console.log("Inside finally block");
  }
}

tryCatchFinally();

// Activity 3: Custom Error Objects

// Task 4: Custom Error Class

// Task 5: Validate User Input

// Activity 4: Error Handling in Promises

// Task 6: Promise with Error Handling
function createPromise() {
  return new Promise((resolve, reject) => {
    const random = 1;
    if (!random) {
      resolve("Promise resolved");
    } else {
      reject(Error("Promise rejected"));
    }
  });
}

createPromise()
  .then((result) => console.log(result))
  .catch((error) => console.log("Error caught: " + error.message));

// Task 7: Async Function with Error Handling
async function asyncFunction() {
  try {
    const result = await createPromise();
    console.log(result);
  } catch (error) {
    console.log("Error caught: " + error.message);
  }
}

asyncFunction();

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Fetch with .catch()
fetch("https://invalid-url")
  .then((response) => response.json())
  .catch((error) => console.log("Error caught: " + error.message));

// Task 9: Fetch with Try-Catch in Async Function
async function fetchData() {
  try {
    const response = await fetch("https://invalid-url");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error caught: " + error.message);
  }
}

fetchData();
