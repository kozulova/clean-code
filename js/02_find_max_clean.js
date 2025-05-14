// const arr = [1, 3, 2, 5, 4];
const COUNT = 100000;
const arr = Array.from({ length: COUNT }, () =>
  Math.floor(Math.random() * 1000)
);

function isGreater(a, b) {
  return a > b;
}

function findMax(arr) {
  return arr.reduce((max, val) => (isGreater(val, max) ? val : max), arr[0]);
}

console.time("Clean Find Max");
const resultCleanMax = findMax(arr);
console.timeEnd("Clean Find Max"); // Prints time taken

console.log(resultCleanMax); // Output the result

/* 
Every iteration of .reduce() Calls an anonymous callback function.

Calls the isGreater() helper function inside that.

That means two function calls per iteration:

One for .reduce’s internal loop

One for isGreater()

*/
