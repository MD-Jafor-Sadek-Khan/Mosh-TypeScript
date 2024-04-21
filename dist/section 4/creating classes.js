"use strict";
class Account {
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
let account = new Account(1, 'rahat', 0);
console.log(account);
account.deposite(100);
console.log('balance', account.balance);
console.log('type', typeof account);
console.log('instance of Account', account instanceof Account);
//# sourceMappingURL=creating%20classes.js.map