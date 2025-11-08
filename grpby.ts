// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 25 },
// ];

// type Grouped<T> = Record<string, T[]>;

// function groupBy<T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> {
//   return arr.reduce((acc, curr) => {
//     const keyValue = String(curr[key]);

//     if (!acc[keyValue]) {
//       acc[keyValue] = [];
//     }

//     acc[keyValue].push(curr);

//     return acc;
//   }, {} as Grouped<T>);
// }

// const grouped = groupBy(users, 'age');

// console.log(grouped)

// type Shape =
//   | { kind: 'circle'; radius: number }
//   | { kind: 'rectangle'; width: number; height: number }
//   | { kind: 'triangle'; base: number; height: number };

// const circle: Shape = { kind: 'circle', radius: 10 };
// const rect: Shape = { kind: 'rectangle', width: 10, height: 5 };
// const tri: Shape = { kind: 'triangle', base: 10, height: 6 };

// function calculateArea(shape: Shape): number {
//   switch (shape.kind) {
//     case 'circle':
//       return 3.14 * Math.pow(shape.radius, 2);
//     case 'rectangle':
//       return shape.width * shape.height;
//     case 'triangle':
//       return 0.5 * shape.base * shape.height;
//     default:
//       return -1;
//   }
// }

// console.log(calculateArea(circle));

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
// ];

// function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
//   const result: T[K][] = [];
//   for (const item of arr) {
//     result.push(item[key]);
//   }
//   return result;
// }

// const names = pluck(users, 'name');
// console.log(names); // ["Alice", "Bob", "Charlie"]

// const ages = pluck(users, 'age');
// console.log(ages); // [25, 30, 35]

// const user = { name: 'Alice', age: 25, city: 'Delhi' };

// function updateObject<T>(obj: T, updates: Partial<T>): T {
//   return { ...obj, ...updates };
// }

// const updatedUser = updateObject(user, { age: 26 });

// console.log(updatedUser)

// const data = [
//   { category: 'fruit', name: 'apple' },
//   { category: 'fruit', name: 'banana' },
//   { category: 'vegetable', name: 'carrot' },
// ];

// function groupBy<T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> {
//   const grouped = arr.reduce((acc, curr) => {
//     const keyValue = curr[key];
//     const groupKey = String(keyValue);
//     if (!acc[groupKey]) {
//       acc[groupKey] = [];
//     }
//     acc[groupKey].push(curr);
//     return acc;
//   }, {} as Record<string, T[]>);

//   return grouped;
// }

// console.log(groupBy(data, 'name'));

const apiResponse = [
  { id: 1, name: 'Rahul', city: 'Mumbai', skills: ['Node.js', 'TypeScript'] },
  { id: 2, name: 'Aman', city: 'Delhi', skills: ['React', 'Next.js'] },
  { id: 3, name: 'Sara', city: 'Mumbai', skills: ['Python', 'ML'] },
];

function groupByKey<T, K extends keyof T>(
  arr: T[],
  key: K
): Record<string, Omit<T, K>[]> {
  return arr.reduce((acc, curr) => {
    const groupKey = String(curr[key]);

    const { [key]: _, ...rest } = curr;

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(rest);

    return acc;
  }, {} as Record<string, Omit<T, K>[]>);
}

const grouped = groupByKey(apiResponse, 'city');

console.log(grouped);

const newObj = {
  name: 'rahul',
  age: '32',
};

const { age: _, ...transformed } = newObj;

console.log(transformed)
console.log(newObj)