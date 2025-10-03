const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 40 },
  { name: 'Eve', age: 30 },
];

const grouped = people.reduce((acc, curr) => {
  if (!acc.get(curr.age)) {
    acc.set(curr.age, []);
  }
  acc.get(curr.age)?.push(curr.name);
  return acc;
}, new Map<number, string[]>());

console.log(grouped);
