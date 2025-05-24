class User {
  static count = 1;
  id: number;
  static cache = {
    1: 'some value',
  };

  constructor(public name: string, public age: number, public income: number) {
    this.id = User.count++;
  }

  static checkCache() {
    console.log(this.cache)
  }

  static hasInCache() {
    this.checkCache()
  }

  static compareByAge(user1, user2) {
    return user1.age - user2.age;
  }

  static compareByIncome(user1, user2) {
    return user1.income - user2.income;
  }
}

const user1 = new User('rahul kumar', 20, 4000);
const user2 = new User('john doe', 22, 2000);
const user3 = new User('jane doe', 13, 3000);

// const users = [user1, user2, user3];
// const sortedUsers = users.sort(User.compareByAge);
// const sortedUsersByIncome = users.sort(User.compareByIncome);

// // console.log(users);
// console.log(sortedUsers);
// console.log(sortedUsersByIncome);

// console.log(user1);
// console.log(user2);
// console.log(user3);

// class Config {
//   static dbUser = 'username';
//   static dbPassword = 'secret';
//   static apiToken = 'abcd';
// }

User.hasInCache()