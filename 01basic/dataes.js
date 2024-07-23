// Create a new Date object representing the current date and time
let currentDate = new Date();

// Output various string representations of the current date
console.log("Full date and time string:", currentDate.toString());           // Full date and time string
console.log("Readable date format:", currentDate.toDateString());           // Date in a readable format (e.g., "Wed Jul 24 2024")
console.log("ISO 8601 format:", currentDate.toISOString());                // ISO 8601 format (e.g., "2024-07-24T15:00:00.000Z")
console.log("JSON representation:", currentDate.toJSON());                // JSON representation of the date
console.log("Locale date format:", currentDate.toLocaleDateString());      // Date formatted according to locale settings
console.log("Locale date and time:", currentDate.toLocaleString());        // Full date and time formatted according to locale settings
console.log("UTC format:", currentDate.toUTCString());                     // Date and time in UTC format
console.log("Time part of the date:", currentDate.toTimeString());         // Time part of the date (e.g., "15:00:00 GMT+0000")
console.log("Timezone offset in minutes:", currentDate.getTimezoneOffset()); // Timezone offset in minutes from UTC

// Create a Date object with a specific date: May 23, 2934
let specificDate = new Date(2934, 4, 23); // Month is zero-based, so 4 represents May
console.log("Specific date in locale format:", specificDate.toLocaleString()); // Output the specific date in locale-specific format

// Get the current timestamp in milliseconds since January 1, 1970
let currentTimestamp = Date.now();
console.log("Current timestamp (milliseconds):", currentTimestamp); // Output the timestamp as a number

// Note: Date.now() returns a number, and `toLocaleString()` is a method for Date objects, not numbers.
