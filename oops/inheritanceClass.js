var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(customerName, balance) {
        if (balance === void 0) { balance = 0; }
        this.customerName = customerName;
        this.balance = balance;
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    return BankAccount;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(customerName, balance) {
        var _this = _super.call(this, customerName, balance) || this;
        _this.customerName = customerName;
        _this.balance = balance;
        _this.transactionLimit = 50000;
        return _this;
    }
    SavingAccount.prototype.takePersonalLoan = function () {
        console.log("Taking personal loan");
    };
    return SavingAccount;
}(BankAccount));
var rahulAccount = new SavingAccount('Rahul kumar', 2000);
console.log(rahulAccount);
