const user1 = {
  firstName: 'rahul',
  age: 8,
  about: function (city = 'mumbai', job = 'tester') {
    console.log(this.firstName, this.age, city, job);
  },
};

const user2 = {
  firstName: 'mohit',
  age: 8,
};

const user3 = {
  firstName: 'rohit',
  age: 8,
};

user1.about();
user1.about.call(user2, 'delhi', 'full stack developer');

//* only difference between call and apply is that it in apply we use array to pass arguments instead of comma

user1.about.apply(user2, ['hydrabad', 'Frontend developer']);

const fun = user1.about.bind(user3,'gurugram','Data scientiest')
fun()
