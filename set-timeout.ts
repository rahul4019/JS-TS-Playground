const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const arr = [
  { type: 'fruit', name: 'apple' },
  { type: 'fruit', name: 'banana' },
  { type: 'fruit', name: 'apple' },
];

type Initial = {
  [fruit: string]: number;
};

const inObj: Initial = {};

const result1 = arr.reduce((acc, curr) => {
  acc[curr.name] = (acc[curr.name] ?? 0) +1
  return acc;
}, inObj);

console.log(result1);
