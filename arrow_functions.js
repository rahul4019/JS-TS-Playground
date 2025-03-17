// arrow function does not have their own this they take their this from surrounding
const user1 = {
  firstName: 'rahul',
  age: 8,
  about: (city = 'mumbai', job = 'tester') => {
    console.log(this);
    console.log(this.firstName, this.age, city, job);
  },
};

user1.about.call(user1); // call will have no effect on arrow function
