// const arr = ["a", "b", "a", "c", "b", "a"];
const COUNT = 100000;

const arr = Array.from({ length: COUNT }, () =>
  String.fromCharCode(97 + Math.floor(Math.random() * 26))
); // 'a' to 'z'

function countOccurrences(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    counts[val] = (counts[val] || 0) + 1;
  }
  return counts;
}

console.time("Performant Count Occurrences");
const resultPerformantCount = countOccurrences(arr);
console.timeEnd("Performant Count Occurrences");
