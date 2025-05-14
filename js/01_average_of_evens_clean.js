// const arr = [1, 2, 3, 4, 5, 6];

const COUNT = 100000;
const arr = Array.from({ length: COUNT }, () =>
  Math.floor(Math.random() * 100)
);

function isEven(n) {
  return n % 2 === 0;
}

function getEvenNumbers(arr) {
  return arr.filter(isEven);
}

function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

function averageOfEvens(arr) {
  const evens = getEvenNumbers(arr);
  return calculateAverage(evens);
}

console.time("Clean Average of Evens");
const resultClean = averageOfEvens(arr);
console.log(resultClean);
console.timeEnd("Clean Average of Evens");

/* 
Two Full Iterations of the Array
For an array of 100,000 items:

filter() goes through 100,000 elements.

reduce() goes through up to 100,000 elements again (depending on how many are even).

Traversing a large part of the array twice.

This results in O(2n) complexity in practice, even though that's still linear time O(n) from a theoretical point of view.

*/
