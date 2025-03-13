const users = [
  { id: 1, name: 'Alice', lastSeen: '2024-02-20T14:30:00Z' },
  { id: 2, name: 'Bob', lastSeen: '2024-02-21T09:15:00Z' },
  { id: 2, name: 'Bob', lastSeen: '2024-02-21T09:15:00Z' },
  { id: 3, name: 'Charlie', lastSeen: '2024-02-22T18:45:00Z' },
  { id: 4, name: 'David', lastSeen: '2024-02-23T22:10:00Z' },
];

// const uniqueUsers = Array.from(
//   new Set(users.map((user) => JSON.stringify(user))).map((str) =>
//     JSON.parse(str)
//   )
// );

const uniqueUsers = Array.from(
  new Set(users.map((user) => JSON.stringify(user)))
).map((str) => JSON.parse(str));

users.sort((a,b) => new Date(a.lastSeen) - new Date(b.lastSeen))
console.log(uniqueUsers);

