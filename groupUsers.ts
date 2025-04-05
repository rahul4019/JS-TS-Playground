interface User {
  name: string;
  role: string;
}

const users: User[] = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
  { name: 'David', role: 'user' },
  { name: 'Eve', role: 'editor' },
];

interface GroupedUsers {
  [role: string]: User[];
}

const result: GroupedUsers = users.reduce((acc: GroupedUsers, curr: User) => {
  let role = curr.role;
  if (!acc[role]) {
    acc[role] = [curr];
  } else {
    acc[role].push(curr);
  }
  return acc;
}, {} as GroupedUsers);

console.log(result);
