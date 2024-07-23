// String manipulation examples

// Initialize string variables
let greeting = "hello";
let audience = "worlddd";

// Concatenate strings
let concatenatedString = greeting + audience;
console.log("Concatenated String:", concatenatedString); // Output: "helloworlddd"

// Use template literals for more readable string construction
let formattedString = `${greeting} to this new ${audience}`;
console.log("Formatted String:", formattedString); // Output: "hello to this new worlddd"

// Initialize a string
let text = "hello";

// Convert string to uppercase
console.log("Uppercase:", text.toUpperCase()); // Output: "HELLO"

// Convert string to lowercase
console.log("Lowercase:", text.toLowerCase()); // Output: "hello"

// Get the length of the string
console.log("Length of the string:", text.length); // Output: 5

// Slice a portion of the string from index 1 to 4
console.log("Sliced String (1, 4):", text.slice(1, 4)); // Output: "ell"

// Trim whitespace from both ends of the string
console.log("Trimmed String:", text.trim()); // Output: "hello"

// Trim whitespace from the end of the string
console.log("Trimmed End String:", text.trimEnd()); // Output: "hello"

// Trim whitespace from the start of the string
console.log("Trimmed Start String:", text.trimStart()); // Output: "hello"
