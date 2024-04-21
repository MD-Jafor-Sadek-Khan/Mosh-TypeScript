class Account5 {
  nickName?: string

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposite(amount: number): void {
    if (amount <= 0) throw new Error("Invalid Deposite Amount")
    this.calculateTax()
    this._balance += amount
  }

  private calculateTax() {}

  getBalance(): number {
    return this._balance
  }
}

let account5 = new Account5(1, "rahat", 0)

console.log(account5)
account5.deposite(100)
console.log("balance", account5.getBalance())
console.log("type", typeof account5)
console.log("instance of Account", account5 instanceof Account5)
