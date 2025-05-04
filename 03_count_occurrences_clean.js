// const arr = ["a", "b", "a", "c", "b", "a"];
const COUNT = 100000;

const arr = Array.from({ length: COUNT }, () =>
  String.fromCharCode(97 + Math.floor(Math.random() * 26))
); // 'a' to 'z'

function countOccurrences(arr) {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}

console.time("Clean Count Occurrences");
const resultCleanCount = countOccurrences(arr);
console.timeEnd("Clean Count Occurrences");
