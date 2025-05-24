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
    function BankAccount(customerName, _balance) {
        if (_balance === void 0) { _balance = 0; }
        this.customerName = customerName;
        this._balance = _balance;
        this.accountNumber = Date.now();
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (amount) {
            this._balance = amount;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(customerName, _balance) {
        if (_balance === void 0) { _balance = 0; }
        var _this = _super.call(this, customerName, _balance) || this;
        _this.customerName = customerName;
        _this._balance = _balance;
        _this.transactionLimit = 50000;
        return _this;
    }
    CurrentAccount.prototype.calculateInterest = function (amount) {
        console.log("Calculating interest");
    };
    CurrentAccount.prototype.takeBusinessLoan = function (amount) {
        this.calculateInterest(amount);
        console.log("Taking business loan");
    };
    return CurrentAccount;
}(BankAccount));
var rahulAccount = new CurrentAccount('rahul', 400);
// rahulAccount.balance = 5000;
rahulAccount.balance = 4000;
rahulAccount.takeBusinessLoan(4000);
console.log(rahulAccount);
