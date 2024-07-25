// Activity 1: For Loop

// Task 1: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("---");

// Task 2: Print multiplication table of 5
const num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

console.log("---");

// Activity 2: While Loop

// Task 3: Calculate sum of numbers from 1 to 10
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("Sum:", sum);

console.log("---");

// Task 4: Print numbers from 10 to 1
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

console.log("---");

// Activity 3: Do...While Loop

// Task 5: Print numbers from 1 to 5
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

console.log("---");

// Task 6: Calculate factorial of a number
let number = 5; // Example number
let factorial = 1;
let l = 1;
do {
  factorial *= l;
  l++;
} while (l <= number);
console.log(`Factorial of ${number} is ${factorial}`);

console.log("---");

// Activity 4: Nested Loops

// Task 7: Print pattern
for (let m = 1; m <= 5; m++) {
  let pattern = "";
  for (let n = 1; n <= m; n++) {
    pattern += "*";
  }
  console.log(pattern);
}

console.log("---");

// Activity 5: Loop Control Statements

// Task 8: Print numbers from 1 to 10, skip 5
for (let o = 1; o <= 10; o++) {
  if (o === 5) {
    continue;
  }
  console.log(o);
}

console.log("---");

// Task 9: Print numbers from 1 to 10, stop at 7
for (let p = 1; p <= 10; p++) {
  if (p === 7) {
    break;
  }
  console.log(p);
}
