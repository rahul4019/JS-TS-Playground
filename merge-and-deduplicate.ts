const users1 = [
  { userId: 1, name: 'Alice' },
  { userId: 2, name: 'Bob' },
];

const users2 = [
  { userId: 2, name: 'Bob' },
  { userId: 3, name: 'Charlie' },
];

const merged  = [...users1,...users2].filter((user,index,self) => index === self)
// console.log(final)