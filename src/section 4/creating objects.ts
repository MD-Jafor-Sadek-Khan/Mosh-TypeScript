class Account2 {
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
  
  let account = new Account2(1, 'rahat', 0)
  
  console.log(account);
  account.deposite(100)
  console.log('balance',account.balance);
  console.log('type',typeof account);
  console.log('instance of Account',account instanceof Account2);
  
  
  