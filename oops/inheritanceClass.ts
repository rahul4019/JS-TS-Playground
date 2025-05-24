class BankAccount {
  accountNumber: number;
  constructor(public customerName: string, public balance: number = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    this.balance -= amount;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(public customerName: string, public balance: number) {
    super(customerName, balance);
  }

  takeBusinessLoan() {
    console.log(`Taking business loan`);
  }
}

class SavingAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(public customerName: string, public balance: number) {
    super(customerName, balance);
  }

  takePersonalLoan() {
    console.log(`Taking personal loan`);
  }
}

const rahulAccount = new SavingAccount('Rahul kumar', 2000);
console.log(rahulAccount);
