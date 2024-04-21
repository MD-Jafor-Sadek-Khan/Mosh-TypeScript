"use strict";
class Account6 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error("Invalid Deposite Amount");
        this.calculateTax();
        this._balance += amount;
    }
    calculateTax() { }
    get balance() {
        return this._balance;
    }
}
let account6 = new Account6(1, "rahat", 0);
console.log(account6);
account6.deposite(100);
console.log("balance", account6.balance);
console.log("type", typeof account6);
console.log("instance of Account", account6 instanceof Account6);
//# sourceMappingURL=getters%20and%20setters.js.map