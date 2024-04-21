"use strict";
class Account5 {
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
    getBalance() {
        return this._balance;
    }
}
let account5 = new Account5(1, "rahat", 0);
console.log(account5);
account5.deposite(100);
console.log("balance", account5.getBalance());
console.log("type", typeof account5);
console.log("instance of Account", account5 instanceof Account5);
//# sourceMappingURL=parameter%20properties.js.map