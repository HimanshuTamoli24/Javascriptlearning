// Initial score and balance operations
const initialScore = 100;
console.log("Initial Score:", initialScore);

// Convert score to a Number object and perform operations
const scoreAsNumberObject = new Number(initialScore);
console.log("Type of balance.toString():", typeof scoreAsNumberObject.toString());
console.log("Score with 3 decimal places:", scoreAsNumberObject.toFixed(3));

// Large number example
const largeNumber = 7600000000000000000;
// Formatting large number with locale-specific formatting
console.log("Formatted large number (en-IN locale):", largeNumber.toLocaleString('en-IN'));

// Math library operations
console.log("Math Library:", Math);

// Absolute value examples
console.log("Absolute value of 4:", Math.abs(4));
console.log("Absolute value of -4:", Math.abs(-4));

// Rounding examples
console.log("Rounded value of 4.95678:", Math.round(4.95678));
console.log("Ceiling value of 4.95678:", Math.ceil(4.95678));

// Maximum and minimum values
console.log("Maximum value among 4.95678, 4, 5, 59:", Math.max(4.95678, 4, 5, 59));
console.log("Minimum value among 4.95678, 4, 5, 59:", Math.min(4.95678, 4, 5, 59));

// Random number generation
console.log("Random number between 0 and 1:", Math.random());
console.log("Random number between 0 and 10:", Math.random() * 10);
console.log("Random number between 1 and 11:", Math.random() * 10 + 1);

// Generating random integer within a specific range
const minValue = 10;
const maxValue = 20;

// Random integer between minValue and maxValue, inclusive
console.log("Random integer between 10 and 20 (inclusive):", Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
