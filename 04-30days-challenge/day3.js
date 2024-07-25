// Activity 1: Basic Conditions
// Task 1
const number = -3;
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// Task 2
const age = 20;
if (age >= 18) {
  console.log("Eligible to vote.");
} else {
  console.log("Not eligible to vote.");
}

// Activity 2: Nested If-Else Statements
// Task 3
const num1 = 10;
const num2 = 20;
const num3 = 15;

if (num1 >= num2 && num1 >= num3) {
  console.log("The largest number is:", num1);
} else if (num2 >= num1 && num2 >= num3) {
  console.log("The largest number is:", num2);
} else {
  console.log("The largest number is:", num3);
}

// Activity 3: Switch Case
// Task 4
const dayNumber = 3;
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}

// Task 5
const score = 85;
let grade;
switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log("Grade:", grade);

// Activity 4: Conditional (Ternary) Operator
// Task 6
const num = 7;
const parity = num % 2 === 0 ? "Even" : "Odd";
console.log("The number is:", parity);

// Activity 5: Combining Conditions
// Task 7
// const year = 2024;
// const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// console.log('Is leap year:', isLeapYear);

// cant able to understand rn
