function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

let person = {
  name: "random1",
  age: 21,
  dob: "12-june-2005",
};

const PI = 3.14;
const E = 2.71;

function circleArea(radius) {
  return PI * radius * radius;
}

function circleCircumference(radius) {
  return 2 * PI * radius;
}

module.exports = {
  add,
  sub,
  person,
  circleArea,
  E,
  PI,
};
