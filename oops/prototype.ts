function BankAccount(customerName: string, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

const rahulAccount = new BankAccount('Rahul Kumar');
const johnAccount = new BankAccount('John Doe', 1000);

BankAccount.prototype.deposit = function (amount: number) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = (amount: number) => {
  this.balance -= amount;
};

// johnAccount.deposit(3000);

console.log(johnAccount);
