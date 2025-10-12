const nums: number[] = [1, 2, 3];

/* 
    callback passed in map is called for every item in the array
*/
const transformed = nums.map((num, idx) => num + 1);

console.log(`transformed: `, transformed);
// console.log(`isArray: ${isArray(transformed)}`)

const user = [
  {
    id: 1,
    fName: 'rahul',
    lName: 'kumar',
  },
  {
    id: 2,
    fName: 'rakesh',
    lName: 'singh',
  },
];

const res = user.map((u) => ({ fullName: `${u.fName} ${u.lName}` }));

console.log(`transformed user arr: `, res);
