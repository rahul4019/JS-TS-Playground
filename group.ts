const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 35 },
];

interface GroupedUser {
  [age: number]: string[];
}

const groupedUsers: GroupedUser = people.reduce((acc, curr) => {
  acc[curr.age] = acc[curr.age] || [];
  acc[curr.age].push(curr.name);
  return acc;
}, {} as GroupedUser);

console.log(groupedUsers);
