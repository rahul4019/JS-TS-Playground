// Given an array of integers, write a function that returns the largest product of any two integers in the array.

const arr = [1, 2, 3, 4, 5, -5, -7];

let max1 = -Infinity;
let max2 = -Infinity;
let min1 = Infinity;
let min2 = Infinity;

for (num of arr) {
  if (num > max1) {
    max2 = max1;
    max1 = num;
  } else if (num > max2) {
    max2 = num;
  }

  // to handle negative integers
  if (num < min1) {
    min2 = min1;
    min1 = num;
  } else if (num < min2) {
    min2 = num;
  }
}

const maximumProduct = Math.max(max1 * max2, min1 * min2);
console.log('Max Product: ', maximumProduct);
