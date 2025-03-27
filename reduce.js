//* sum of array elements
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, num) => acc + num, 0);

// console.log('SUM: ', sum);

//* flatten an array
const nestedArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// const flatArr = nestedArr.reduce((acc, curr) => acc.concat(curr), []);
const flatArr = nestedArr.reduce((acc, curr) => [...acc, ...curr], []);
// console.log('Flatenned Array: ', flatArr);

// const newArr = [...nums,...flatArr]
const newArr = nums + flatArr; // return string
// console.log(typeof newArr);

//* counting occurences using reduce
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const count = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

// console.log(count);

//* grouping by property
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Alice', age: 35 },
];

const grouped = users.reduce((acc, user) => {
  acc[user.name] = acc[user.name] || [];
  acc[user.name].push(user);
  return acc;
}, {});

console.log(grouped);

//* convert keys to camel case
const userProfile = {
  first_name: 'Rahul',
  last_name: 'Sharma',
  email_address: 'rahul.sharma@example.com',
  phone_number: '+91-9876543210',
  date_of_birth: '1995-08-15',
  home_address: {
    street_name: 'MG Road',
    city_name: 'Bangalore',
    zip_code: '560001',
    country_name: 'India',
  },
  is_active: true,
  last_login_date: '2025-03-27T10:30:00Z',
  preferences: {
    receive_emails: true,
    dark_mode_enabled: false,
    language_preference: 'en-US',
  },
};

const toCamelCase = (str) => {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};

const camelCase = Object.entries(userProfile).reduce((acc, [key, value]) => {
  // convert key to camelCase than store in the accumulator
  const camelCaseKey = toCamelCase(key);
  acc[camelCaseKey] = value;
  return acc;
}, {});

console.log(camelCase);


const str = "rahul_kumar"
const modifiedStr = str.replace('_k', "***")
console.log(modifiedStr)
// console.log(str)