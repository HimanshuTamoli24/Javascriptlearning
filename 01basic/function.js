// Function to add two numbers and log the result
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2); // Logs the sum of the two numbers
  }
  
  // Calling the function and storing the result (Note: The function does not return a value)
  addTwoNumbers(4, 5);
  
  // Revised function to add two numbers and return the result
  function calculateSum(number1, number2) {
    let sum = number1 + number2; // Calculate the sum
    return sum; // Return the sum
  }
  
  // Calling the function and storing the result
  const sumResult = calculateSum(4, 5);
  console.log(sumResult); // Logs the result of the addition
  
  // Function to handle user login
  function loginUser(userName) {
    if (!userName) {
      console.log("Please enter a name"); // Log a message if userName is empty or undefined
      return;
    }
    return `${userName} just logged in`; // Return a message indicating the user has logged in
  }
  
  // Calling the function with different user names
  console.log(loginUser("o")); // Logs the login message for user "o"
  console.log(loginUser("arnav")); // Logs the login message for user "arnav"
  console.log(loginUser("")); // Logs the login message for user "arnav"
  
  // Function to calculate price with variable number of arguments using rest parameters
  function calculatePrice(...prices) {
    return prices; // Return all provided prices as an array
  }
  
  // Calling the function with different numbers of arguments
  console.log(calculatePrice(200)); // Logs array with a single price [200]
  console.log(calculatePrice(200, 300, 400, 500)); // Logs array with multiple prices [200, 300, 400, 500]
  
  // Object representing a user
  const user = {
    userName: "nmo",
    userId: "1",
  };
  
  // Function to handle an object and log user details
  function logUserDetails(userObject) {
    console.log(`Username is ${userObject.userName} and their ID is ${userObject.userId}`); // Log user details
  }
  
  // Calling the function with different user objects
  logUserDetails(user);
  logUserDetails({
    userName: "yaar",
    userId: "11",
  });
  
  // Function to return the second value from an array
  function getSecondValue(array) {
    return array[1]; // Return the second element of the array
  }
  
  // Array with multiple values
  const myArray = [11, 22, 33, 44, 55];
  
  // Calling the function to get the second value from the array
  console.log(getSecondValue(myArray)); // Logs the second value of the array, which is 22
  