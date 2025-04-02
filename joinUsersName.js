// you have to create a string with name properties of each object joined with ---

const users = [
  {
    name: 'Rahul Sharma',
    age: 25,
    email: 'rahul@example.com',
    role: 'Full-Stack Developer',
  },
  {
    name: 'Aditi Verma',
    age: 28,
    email: 'aditi@example.com',
    role: 'UI/UX Designer',
  },
  {
    name: 'Karan Mehta',
    age: 30,
    email: 'karan@example.com',
    role: 'Backend Engineer',
  },
];

const result = users.map((item) => item.name).join("----");
console.log(result)
