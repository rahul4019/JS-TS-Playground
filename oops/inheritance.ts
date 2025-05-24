function BankAccount(customerName: string, balance: number) {
  this.accuntNumber = Date.now();
  this.customerName = customerName;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount: number) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount: number) {
  this.balance -= amount;
};

function CurrentAccount(customerName: string, balance: number = 0) {
  BankAccount.call(this, customerName, balance);
  this.transactionLimit = 50000;
}
CurrentAccount.prototype = Object.create(BankAccount.prototype);

function SavingAccount(customerName: string, balance: number = 0) {
  BankAccount.call(this, customerName, balance);
  this.transactionLimit = 50000;
}

SavingAccount.prototype = Object.create(BankAccount.prototype);

SavingAccount.prototype.takePersonalLoan = function (amount: number) {
  console.log(`Taking personal loan: ${amount}`);
};

const rahulAccount = new SavingAccount('rahul', 4000);
rahulAccount.deposit(500);
console.log(rahulAccount);
