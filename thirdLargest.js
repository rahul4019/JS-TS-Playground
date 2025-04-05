// const arr = [3, 2, 1];
// const arr = [1, 2];
const arr = [2, 2, 3, 1];
// const arr = [1, 1, 2];
 

// O(n) approach
let max1 = -Infinity;
let max2 = -Infinity;
let max3 = -Infinity;

for (num of arr) {
  if (num > max1) {
    max3 = max2;
    max2 = max1;
    max1 = num;
  } else if (num > max2) {
    max3 = max2;
    max2 = num;
  } else if (num > max3 || num < max2) {
    max3 = num;
  }
}

if (max3 === -Infinity || max3 === max2) {
  max3 = max1;
}

console.log('max1: ', max1);
console.log('max2: ', max2);
console.log('max3: ', max3);

// SET approach O(n^2)
const unique = [...new Set(arr)].sort((a, b) => b - a);
console.log(unique);

const thirdLargest = unique[2] === undefined ? unique[0] : unique[2];
console.log(thirdLargest);
 
