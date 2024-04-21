"use strict";
class Account4 {
    constructor(id, owner, balance) {
        this.id = id;
        this._balance = balance;
        this.owner = owner;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error("Invalid Deposite Amount");
        this.calculateTax();
        this._balance += amount;
    }
    calculateTax() {
    }
    getBalance() {
        return this._balance;
    }
}
let account4 = new Account4(1, "rahat", 0);
console.log(account4);
account4.deposite(100);
console.log("balance", account4.getBalance());
console.log("type", typeof account4);
console.log("instance of Account", account4 instanceof Account4);
//# sourceMappingURL=access%20control%20keywords.js.map