class Account {
  id: number
  owner: string
  balance: number

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


