const users1 = [
  { userId: 1, name: 'Alice' },
  { userId: 2, name: 'Bob' },
];

const users2 = [
  { userId: 2, name: 'Bob' },
  { userId: 3, name: 'Charlie' },
];

const merged = [...users1, ...users2]

console.log(merged)

const idx = users2.findIndex(item => item.name === "Bob")
console.log(idx)

const uniqueUser = [...new Map(merged.map(u => [u.userId, u])).values()]
console.log(uniqueUser)