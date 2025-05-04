// Generate demo data: ['a'...'z']
const COUNT = 100000;
const arr = Array.from({ length: COUNT }, () =>
  String.fromCharCode(97 + Math.floor(Math.random() * 26))
);

// Helper: update count
function incrementCount(counts, key) {
  counts[key] = (counts[key] || 0) + 1;
}

// Main logic
function countOccurrences(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    incrementCount(counts, arr[i]);
  }
  return counts;
}

console.time("Balanced Count Occurrences");
const result = countOccurrences(arr);
console.timeEnd("Balanced Count Occurrences");

/* 

✅ Readability via clear naming and simple structure.

✅ Performance via a for loop instead of .reduce() (avoids function call overhead and callback allocation).

✅ Testability by extracting small helpers.

*/
