var BankAccount = /** @class */ (function () {
    function BankAccount(customerName, balance) {
        if (balance === void 0) { balance = 0; }
        this.customerName = customerName;
        this.balance = balance;
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }
    return BankAccount;
}());
var rahulAccount = new BankAccount('Rahul kumar', 2000);
console.log(rahulAccount);
