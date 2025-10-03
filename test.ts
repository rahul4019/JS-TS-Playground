// const employees = [
//   { name: 'Alice', department: 'HR', salary: 50000 },
//   { name: 'Bob', department: 'Engineering', salary: 80000 },
//   { name: 'Charlie', department: 'HR', salary: 55000 },
//   { name: 'David', department: 'Engineering', salary: 75000 },
//   { name: 'Eve', department: 'Design', salary: 60000 },
// ];

// type Employee = {
//   name: string;
//   department: string;
//   salary: number;
// };

// type Grouped = {
//   [department: string]: Employee[];
// };

// const res: Grouped = employees.reduce((acc, curr) => {
//   if (!acc[curr.department]) acc[curr.department] = [];
//   acc[curr.department].push(curr);

//   // sorting
//   acc[curr.department].sort((a, b) => b.salary - a.salary);
//   return acc;
// }, {} as Grouped);

// console.log(res);

// const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const freqMap = words.reduce((acc, curr) => {
//   acc.set(curr, (acc.get(curr) ?? 0) + 1);
//   return acc;
// }, new Map<string, number>());

// console.log(freqMap);

// const res1 = [...freqMap.entries()].map(([fruit, count]) => ({
//   word: fruit,
//   count,
// }));

// console.log(res1);

// const orders = [
//   { id: 1, amount: 250, date: '2023-05-15' },
//   { id: 2, amount: 400, date: '2023-06-01' },
//   { id: 3, amount: 150, date: '2023-05-20' },
// ];

// // const dateSorted = orders.sort((a,b) => b.date - a.date)

// console.log(new Date(orders[0].date))

// const products = [
//   { id: 1, name: 'Laptop', price: 800, category: 'Electronics' },
//   { id: 2, name: 'Phone', price: 500, category: 'Electronics' },
//   { id: 3, name: 'Shirt', price: 40, category: 'Clothing' },
//   { id: 4, name: 'Shoes', price: 60, category: 'Clothing' },
//   { id: 5, name: 'Book', price: 20, category: 'Stationery' },
// ];

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
// };

// type GroupedByCategory = {
//   [category: string]: Product[];
// };

// const groupedByCategory = products.reduce((acc, curr) => {
//   if (!acc[curr.category]) acc[curr.category] = [];
//   acc[curr.category].push(curr);
//   acc[curr.category].sort((a, b) => a.price - b.price);
//   return acc;
// }, {} as GroupedByCategory);

// console.log(groupedByCategory);

const employees = [
  { id: 1, name: 'Rahul', age: 28, salary: 50000, joiningDate: '2021-06-15' },
  { id: 2, name: 'Amit', age: 25, salary: 60000, joiningDate: '2022-01-10' },
  { id: 3, name: 'Neha', age: 30, salary: 55000, joiningDate: '2020-03-20' },
  { id: 4, name: 'Priya', age: 27, salary: 65000, joiningDate: '2021-12-01' },
];

// // const sortedBySalary = employees.sort(
// //   (a, b) => new Date(b.salary).getTime() - new Date(a.salary).getTime()
// // );

// console.log(sortedBySalary)

// employees.sort((a, b) => a.name.localeCompare(b.name));
// console.log(employees);

// const users = [
//   { id: 1, name: 'Alice', lastSeen: '2024-02-20T14:30:00Z' },
//   { id: 4, name: 'David', lastSeen: '2024-02-23T22:10:00Z' },
//   { id: 3, name: 'Charlie', lastSeen: '2024-02-22T18:45:00Z' },
//   { id: 2, name: 'Bob', lastSeen: '2024-02-21T09:15:00Z' },
// ];

// users.sort(
//   (a, b) => new Date(a.lastSeen).getTime() - new Date(b.lastSeen).getTime()
// );

// console.log('sorted users:', users);

const users = [
  { id: 3, name: 'Rahul', age: 25 },
  { id: 1, name: 'Amit', age: 30 },
  { id: 2, name: 'Sneha', age: 22 },
  { id: 4, name: 'Ankit', age: 25 },
];

function sortingFunction(a: any, b: any) {
  if (a.age === b.age) {
    return a.name.localeCompare(b.name);
  }
  return a.age - b.age;
}

users.sort(sortingFunction);

console.log(users);
