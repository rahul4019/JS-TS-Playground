class User {
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  //   age: number;
  //   address: string;

  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public age: number,
    public address: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.firstName.toUpperCase()} is ${this.age} years old.`;
  }

  is18() {
    return this.age >= 18;
  }
}

const user1 = new User('rahul', 'kumar', 'rahul@gmail.com', 25, 'some address');

console.log(`${user1.about()}`);

// console.log(Object.getPrototypeOf(user1));
console.dir(Object.getPrototypeOf(user1), { showHidden: true });
