// *******************

function echo<T extends number | string>(value: T): T {
  return value
}

const test3 = echo(1)
const test4 = echo("1")

// *******************

function echo2<T extends { name: string }>(value: T): T {
  return value
}

const test5 = echo2({ name: "a" })

// *******************

interface Person {
  name: string
}

function echo3<T extends Person>(value: T): T {
  return value
}

const test6 = echo3({ name: "a" })

// *******************

class Person6 {
  constructor(public name: string) {}
}

class Employee2 extends Person6 {}

function echo4<T extends Person6>(value: T): T {
  return value
}

const person = new Person6("rahat")
const employee3 = new Employee2("khan")
const test7 = echo4(person)
const test8 = echo4(employee3)

console.log(test7, test8)
