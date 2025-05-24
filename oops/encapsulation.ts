class BankAccount {
  accountNumber: number;
  constructor(public customerName: string, protected _balance: number = 0) {
    this.accountNumber = Date.now();
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    this.balance -= amount;
  }

  set balance(amount: number) {
    this._balance = amount;
  }

  get balance() {
    return this._balance;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(public customerName: string, protected _balance: number = 0) {
    super(customerName, _balance);
  }

  private calculateInterest(amount: number) {
    console.log(`Calculating interest`);
  }

  takeBusinessLoan(amount: number) {
    this.calculateInterest(amount);
    console.log(`Taking business loan`);
  }
}

const rahulAccount = new CurrentAccount('rahul', 400);
// rahulAccount.balance = 5000;
rahulAccount.balance = 4000;
rahulAccount.takeBusinessLoan(4000);
console.log(rahulAccount);
