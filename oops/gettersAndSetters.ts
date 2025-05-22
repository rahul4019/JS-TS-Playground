class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static classInfo() {
    return 'this is Person class';
  }

  // getter (get keyword)
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName: string) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person('rahul', 'kumar', 5);
person1.fullName = 'john doe';
console.log(person1.fullName);

console.log(Person.classInfo());
