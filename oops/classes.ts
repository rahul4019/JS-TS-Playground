class BankAccount {
  accountNumber: number;
  constructor(public customerName: string, public balance: number = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
  }

}

const rahulAccount = new BankAccount('Rahul kumar', 2000);
console.log(rahulAccount)