// const arr = [1, 3, 2, 5, 4];
const COUNT = 100000;
const arr = Array.from({ length: COUNT }, () =>
  Math.floor(Math.random() * 1000)
);

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.time("Performant Find Max");
const resultPerformantMax = findMax(arr);
console.timeEnd("Performant Find Max"); // Prints time taken

console.log(resultPerformantMax); // Output the result
