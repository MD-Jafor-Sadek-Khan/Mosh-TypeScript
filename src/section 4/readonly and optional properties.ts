class Account3 {
  readonly id: number
  owner: string
  balance: number
  nickName?: string

  constructor(id: number, owner: string, balance: number) {
    this.id = id
    this.balance = balance
    this.owner = owner
  }

  deposite(amount: number): void {
    if (amount <= 0) throw new Error("Invalid Deposite Amount")
    this.balance += amount
  }
}

let account2 = new Account3(1, "rahat", 0)

console.log(account2)
account2.deposite(100)
console.log("balance", account2.balance)
console.log("type", typeof account2)
console.log("instance of Account", account2 instanceof Account3)
