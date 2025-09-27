const employees = [
  { id: 1, name: 'Alice', department: 'HR' },
  { id: 2, name: 'Bob', department: 'Engineering' },
  { id: 3, name: 'Charlie', department: 'HR' },
  { id: 4, name: 'David', department: 'Engineering' },
  { id: 5, name: 'Eve', department: 'Finance' },
];

// const groupedEmp: {
//   [department: string]: string[];
// } = {};

// employees.forEach((e) => {
//   if (!groupedEmp[e.department]) {
//     groupedEmp[e.department] = [];
//   }
//   groupedEmp[e.department].push(e.name);
// });

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Grouped = {
  [department: string]: Employee[];
};

const grouped: Grouped = {};

employees.forEach((e) => {
  if (!grouped[e.department]) {
    grouped[e.department] = [];
  }

  grouped[e.department].push(e);
});

console.log(grouped);
