const user = {
  firstName: 'rahul',
  lastname: 'kuamr',
  email: 'rahulkashyap4019@gmail.com',
  age: 4,
  address: 'some address',
  about() {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18() {
    return this.age >= 18;
  },
};

const aboutUser = user.about();

// function that creates a object then returns it
function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    console.log(this);
    return `${this.firstName} is ${this.age} years old.`;
  }
  user.is18 = function () {
    return this.age >= 18;
  }
  return user;
}

const user2 = createUser('rahul', 'kumar', 'rahuldevstack@gmail.com', 2, 'abc')
console.log(user2.about())
