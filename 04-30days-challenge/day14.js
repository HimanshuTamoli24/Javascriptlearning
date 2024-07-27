// Define the Person class
class Person {
  // Constructor method to initialize properties
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Method to return a greeting message
  greet() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }

  // Getter for full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter for full name
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }

  // Static method to return a generic greeting message
  static genericGreet() {
    return "Hello, welcome to our community!";
  }
}

// Define the Student class that extends the Person class
class Student extends Person {
  static studentCount = 0; // Static property to keep track of the number of students

  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age); // Call the constructor of the Person class
    this.studentId = studentId;
    Student.studentCount++; // Increment the student count
  }

  // Override the greet method
  greet() {
    return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }

  // Static method to get the total number of students
  static getStudentCount() {
    return Student.studentCount;
  }
}

// Define the Account class with private fields
class Account {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      return this.#balance;
    } else {
      throw new Error("Insufficient balance");
    }
  }

  // Method to get the current balance
  getBalance() {
    return this.#balance;
  }
}

// Create instances and demonstrate the functionality

// Person class
let person1 = new Person("Alice", "Johnson", 30);
console.log(person1.greet()); // "Hello, my name is Alice Johnson and I am 30 years old."
person1.fullName = "Emma Brown"; // Update the full name using the setter
console.log(person1.fullName); // "Emma Brown"
console.log(Person.genericGreet()); // "Hello, welcome to our community!"

// Student class
let student1 = new Student("Bob", "Smith", 20, "S12345");
console.log(student1.greet()); // "Hello, my name is Bob Smith, I am 20 years old, and my student ID is S12345."
let student2 = new Student("Charlie", "Davis", 22, "S12346");
console.log(Student.getStudentCount()); // 2

// Account class
let account1 = new Account(1000);
console.log(account1.deposit(500)); // 1500
console.log(account1.withdraw(200)); // 1300
console.log(account1.getBalance()); // 1300
