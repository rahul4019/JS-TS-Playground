var User = /** @class */ (function () {
    function User(name, age, income) {
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = User.count++;
    }
    User.checkCache = function () {
        console.log(this.cache);
    };
    User.hasInCache = function () {
        this.checkCache();
    };
    User.compareByAge = function (user1, user2) {
        return user1.age - user2.age;
    };
    User.compareByIncome = function (user1, user2) {
        return user1.income - user2.income;
    };
    User.count = 1;
    User.cache = {
        1: 'some value',
    };
    return User;
}());
var user1 = new User('rahul kumar', 20, 4000);
var user2 = new User('john doe', 22, 2000);
var user3 = new User('jane doe', 13, 3000);
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
User.hasInCache();
