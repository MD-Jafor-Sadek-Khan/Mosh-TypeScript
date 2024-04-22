//* Convert the function below to a generic function:

//! function echo(arg) { return arg; }

// sol

//?  function echo<T>(arg: T): T {
//?      return arg
//?    }

/*
 * When compiling the following piece of code, we get an error saying ‘Property name does not exist on type T’. How can we solve this problem?
 */

//! function printName<T>(obj: T) {
//!   console.log(obj.name)
//! }

// sol

//? function printName<T extends {name:string}>(obj: T) {
//?     console.log(obj.name)
//?   }

/*
 * An Entity should have a unique identifier. The type of identifier, however, is dependent on the use case. In some cases, the ID might be a number, in other cases, it might be a  string, GUID, etc. Represent the entity using a generic class.   */

// sol

//? class Entity<T> {
//?   constructor(public id: T) {}
//? }

//* Given the following interface, what does keyof User2 return?

//!  interface User2 {
//!    userId: number
//!    username: string
//!  }

// sol

//? it will return a union of properties of User2
//? User2: userId | username
