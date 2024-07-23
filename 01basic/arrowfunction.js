// Define a user object with a welcome method
const user = {
    userName: "arbav",
    id: 11,
  
    // Method to greet the user
    welcome: function() {
      console.log(`${this.userName}, welcome to the website`);
    },
  };
  
  // Update the userName and call the welcome method
  user.userName = "sam";
  user.welcome();
  
  // Function to add two numbers using traditional function syntax
  const addNumbersTraditional = function(num1, num2) {
    return num1 + num2; // Explicit code to return the sum of num1 and num2
  };
  
  console.log(addNumbersTraditional(1, 2));
  
  // Function to add two numbers using arrow function syntax (implicit return)
  const addNumbersArrow = (num1, num2) => num1 + num2;
  
  console.log(addNumbersArrow(1, 2));
  
  // Immediately Invoked Function Expression (IIFE) to log "db"
  (function logMessage() {
    console.log("db");
  })();
  
  // Immediately Invoked Function Expression (IIFE) with arrow function to log "db2"
  (() => {
    console.log("db2");
  })();
  