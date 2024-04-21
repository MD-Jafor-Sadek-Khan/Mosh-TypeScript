"use strict";
class Account3 {
    constructor(id, owner, balance) {
        this.id = id;
        this.balance = balance;
        this.owner = owner;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error("Invalid Deposite Amount");
        this.balance += amount;
    }
}
let account2 = new Account3(1, "rahat", 0);
console.log(account2);
account2.deposite(100);
console.log("balance", account2.balance);
console.log("type", typeof account2);
console.log("instance of Account", account2 instanceof Account3);
//# sourceMappingURL=readonly%20and%20optional%20properties.js.map