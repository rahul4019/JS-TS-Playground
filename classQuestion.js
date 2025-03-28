class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  static bankName = 'JS Bank';

  static getBankName() {
    return this.bankName;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient funds`);
      return;
    }
    this.balance -= amount;
  }

  displayInfo() {
    console.log(
      `Account Number: ${this.accountNumber}\nAccount Balance: ${this.balance}`
    );
  }
}

const acc1 = new BankAccount('agljsas', 10000);
const acc2 = new BankAccount('wpoagsg', 15000);

acc1.deposit(1000);
acc2.withdraw(1000);

acc1.displayInfo();
acc2.displayInfo();
