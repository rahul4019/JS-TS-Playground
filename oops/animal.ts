// parent class (base class)
// parent class (base class)
class Animal {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  about() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// subclass (children)
class Dog extends Animal {
  constructor(public name: string, public age: number, public speed: number) {
    super(name, age);
    this.speed = speed;
  }

  run() {
    return `${this.name} is running at ${this.speed}`;
  }
}

const tommy = new Dog('tommy', 3, 35);
// console.log(`${tommy.eat()}`);
console.log(`${tommy.run()}`);
