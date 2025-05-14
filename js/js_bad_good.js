// Bad
var count = 10;

// Good
const count = 10;
let total = 0;

/* var is function-scoped and can lead to bugs due to hoisting.
const and let are block-scoped and provide better intent — const for values that shouldn't change, let for those that will. */

/* ======= */

// Bad
function add(a, b) {
  return a + b;
}
// Good
const add = (a, b) => a + b;

/* Arrow functions provide a concise syntax and maintain the lexical this context, making them ideal for callbacks and functional operations. */

/* ======= */

// Bad
const message1 = "Hello, " + name + "!";

// Good
const message2 = `Hello, ${name}!`;

/* ======= */

// Bad
const name = user.name;
const age = user.age;

//Good
const { _name, _age1 } = user;

/* ======= */

//Good
function greet(name) {
  name = name || "Guest";
  return `Hello, ${name}`;
}

//Bad
function greet(name = "Guest") {
  return `Hello, ${name}`;
}

/* ======= */

//Bad
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

//Good
const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

/* ======= */

//Bad
total = 0; // Implicit global

//Good
function calculate() {
  let total = 0;
}

/* ======= */

//Bad
array.push(item);

//Good
const newArray = [...array, item];
