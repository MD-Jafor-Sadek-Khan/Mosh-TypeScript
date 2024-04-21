class Account4 {
  readonly id: number
  owner: string
  private _balance: number
  nickName?: string

  constructor(id: number, owner: string, balance: number) {
    this.id = id
    this._balance = balance
    this.owner = owner
  }

  deposite(amount: number): void {
    if (amount <= 0) throw new Error("Invalid Deposite Amount")
    this.calculateTax()
    this._balance += amount
  }

  private calculateTax(){
    
  }

  getBalance():number{
    return this._balance
  }
}

let account4 = new Account4(1, "rahat", 0)

console.log(account4)
account4.deposite(100)
console.log("balance", account4.getBalance())
console.log("type", typeof account4)
console.log("instance of Account", account4 instanceof Account4)
