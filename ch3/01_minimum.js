/**
 * Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.

// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
 */

let min = function (a, b) {
  return a < b ? a : b;
}

console.log(min(0, 10));
console.log(min(0, -10));