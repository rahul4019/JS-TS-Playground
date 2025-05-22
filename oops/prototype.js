var _this = this;
function BankAccount(customerName, balance) {
    if (balance === void 0) { balance = 0; }
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}
var rahulAccount = new BankAccount('Rahul Kumar');
var johnAccount = new BankAccount('John Doe', 1000);
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};
BankAccount.prototype.withdraw = function (amount) {
    _this.balance -= amount;
};
// johnAccount.deposit(3000);
console.log(johnAccount);
