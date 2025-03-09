function personInfo() {
  console.log(`person name is ${this.firstName} and his age is ${this.age}`);
}

const person = {
  firstName: 'rahul',
  age: 18,
  //   about: function () {
  //     console.log(`person name is ${this.firstName}`);
  //   },
  about: personInfo,
};

const person2 = {
  firstName: 'john',
  age: 28,
  about: personInfo,
};


// this is an object whose value gets decided by how the function is called.
person.about();
person2.about();

function myFunc(){
    'use strict'
    console.log(this)
}

myFunc()