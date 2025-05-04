// const arr = [1, 2, 3, 4, 5, 6];

const COUNT = 100000;
const arr = Array.from({ length: COUNT }, () =>
  Math.floor(Math.random() * 100)
);

function averageOfEvens(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if ((val & 1) === 0) {
      sum += val;
      count++;
    }
  }

  return count === 0 ? 0 : sum / count;
}

console.time("Performant Average of Evens");
const resultPerformant = averageOfEvens(arr);
console.timeEnd("Performant Average of Evens");

console.log(resultPerformant);

/* 
Uses a single loop, no intermediate arrays.

Has better memory efficiency.

Avoids function call overhead (filter, reduce, isEven).

*/
