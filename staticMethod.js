class Person {
  static species = 'Homo sapiens';

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // instance method
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }

  // static method
  static describeSpecies() {
    console.log(`All humans belongs to the species: ${this.species}`);
  }
}

const p1 = new Person('rahul', 2);
const p2 = new Person('rohit', 2);

p1.introduce();
p2.introduce();

Person.describeSpecies();

class MathUtils {
  static square(num) {
    return num * num;
  }

  static randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

console.log(MathUtils.square(5));
console.log(MathUtils.randomBetween(1,5));
