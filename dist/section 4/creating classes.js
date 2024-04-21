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
//# sourceMappingURL=creating%20classes.js.map