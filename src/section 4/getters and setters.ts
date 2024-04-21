class Account6 {
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

  get balance(): number {
    return this._balance
  }
}

let account6 = new Account6(1, "rahat", 0)

console.log(account6)
account6.deposite(100)
console.log("balance", account6.balance)
console.log("type", typeof account6)
console.log("instance of Account", account6 instanceof Account6)
