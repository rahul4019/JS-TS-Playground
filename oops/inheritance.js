function BankAccount(customerName, balance) {
    this.accuntNumber = Date.now();
    this.customerName = customerName;
    this.balance = balance;
}
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};
BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
};
function CurrentAccount(customerName, balance) {
    if (balance === void 0) { balance = 0; }
    BankAccount.call(this, customerName, balance);
    this.transactionLimit = 50000;
}
CurrentAccount.prototype = Object.create(BankAccount.prototype);
function SavingAccount(customerName, balance) {
    if (balance === void 0) { balance = 0; }
    BankAccount.call(this, customerName, balance);
    this.transactionLimit = 50000;
}
SavingAccount.prototype = Object.create(BankAccount.prototype);
SavingAccount.prototype.takePersonalLoan = function (amount) {
    console.log("Taking personal loan: ".concat(amount));
};
var rahulAccount = new SavingAccount('rahul', 4000);
rahulAccount.deposit(500);
console.log(rahulAccount);
