const str = 'Hello';

// first convert it in an array
const arr = str.split('');

let start = 0;
let end = str.length - 1;

while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]]; // array destructuring
  start++;
  end--;
}

console.log('Reversed string: ', arr.join(''));
