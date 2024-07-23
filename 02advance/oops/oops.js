// User object with methods
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    // Method to get user details
    getUserDetails: function() {
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
};

// Example usage of the user object
// user.getUserDetails();

// Constructor function for User
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // Method to greet the user
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    };
}

// Creating new User instances
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// Displaying constructor function
console.log(userOne.constructor);

// Example usage of User instances
// userOne.greeting();
// console.log(userTwo);
