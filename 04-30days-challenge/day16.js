// Activity 1: Basic Recursion

// Function to calculate the factorial of a number
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

// Function to calculate the nth Fibonacci number
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(factorial(5)); // 120
console.log(fibonacci(6)); // 8

// Activity 2: Recursion with Arrays

// Function to find the sum of all elements in an array
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

// Function to find the maximum element in an array
function maxArray(arr) {
  if (arr.length === 1) return arr[0];
  const maxRest = maxArray(arr.slice(1));
  return arr[0] > maxRest ? arr[0] : maxRest;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(maxArray([1, 5, 3, 9, 2])); // 9

// Activity 3: String Manipulation with Recursion

// Function to reverse a string
function reverseString(s) {
  return s === "" ? s : s[s.length - 1] + reverseString(s.slice(0, -1));
}

// Function to check if a string is a palindrome
function isPalindrome(s) {
  if (s.length <= 1) return true;
  return s[0] === s[s.length - 1] && isPalindrome(s.slice(1, -1));
}

console.log(reverseString("hello")); // "olleh"
console.log(isPalindrome("racecar")); // True


// Function to count occurrences of a target element in an array
function countOccurrences(arr, target) {
  if (arr.length === 0) return 0;
  return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 1, 1], 1)); // 3

