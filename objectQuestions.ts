const user = { name: 'Rahul', age: 25, city: 'Delhi' };

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(user.hasOwnProperty('name'));

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

const scores = { Rahul: 80, Priya: 90, Amit: 70 };

interface ResultObj {
  name: string;
  score: number;
}

const result: ResultObj[] = Object.entries(scores).reduce(
  (acc, [name, score]) => {
    const newObj = { name, score };
    acc.push(newObj);
    return acc;
  },
  [] as ResultObj[]
);

console.log(result);

const profile = { name: 'Rahul', age: 25, city: 'Delhi' };
// Q: How many properties does this object have?

let count = Object.keys(profile).reduce((acc, curr) => {
  acc++;
  return acc;
}, 0);

console.log(count);

const prices: { [key: string]: number } = { apple: 100, banana: 50, mango: 75 };
// Q: Create a new object with all prices doubled.
const doubledPrices: { [key: string]: number } = {};

for (let fruit in prices) {
  if (prices.hasOwnProperty(fruit)) {
    doubledPrices[fruit] = prices[fruit] * 2;
  }
}

interface DoubledPrice {
  [key: string]: number;
}
const doubled: DoubledPrice = Object.entries(prices).reduce(
  (acc, [fruit, price]) => {
    acc[fruit] = price * 2;
    return acc;
  },
  {} as DoubledPrice
);

// console.log(doubledPrices);
console.log(doubled);

const people = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
];
// Q: Group the people by role, so the result looks like:
// { admin: [Alice, Charlie], user: [Bob] }

interface GroupedUser {
  [role: string]: string[];
}

const peopleArr: GroupedUser = people.reduce((acc, curr) => {
  let role = curr.role;
  if (!acc[role]) {
    acc[role] = [curr.name];
  } else {
    acc[role].push(curr.name);
  }
  return acc;
}, {} as GroupedUser);

console.log(peopleArr);

const obj = {
  name: 'Rahul',
  details: {
    age: 25,
    hobbies: ['coding', 'music'],
  },
};
// Q: Create a deep copy of the above object without using external libraries.

const deepCopyObj = structuredClone(obj);
console.log(deepCopyObj);
