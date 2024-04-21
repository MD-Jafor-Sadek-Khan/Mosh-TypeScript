type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null {
  if (id === 0) {
    return null
  } else {
    return { birthday: new Date() }
  }
}

const customer = getCustomer(1)

console.log(customer?.birthday?.getFullYear())

// let arr:any = null
// arr?.[0]

let log:any = null
log?.('a')
