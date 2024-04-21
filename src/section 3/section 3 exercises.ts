//* Given the data below, define a type alias for representing users.

type User = {
  name: string
  age: number
  occupation?: string
}
type Users = User[]

let users: Users = [
  {
    name: "John Smith",
    age: 30,
    occupation: "Software engineer",
  },
  { name: "Kate Müller", age: 28 },
]

//*  Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

type Birds = {
  fly: () => void
}

type Fish = {
  swim: () => void
}

type Pet = Birds | Fish

let pet: Pet = {
  fly() {},
}

//* Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”,etc.

type Days = "monday" | "tuesday" | "wednesday" | "friday"

let day: Days = "wednesday"

//* Simplify the following code snippets:

// 1 

//! let user = getUser()
//! console.log(user && user.address ? user.address.street : undefined)

// sol

//? let user = getUser()
//? console.log(user?.address?.street)

// 2

//! let x = foo !== null && foo !== undefined ? foo : bar()

// sol

//? let x = foo ?? bar()

//* What is the problem in this piece of code?

//! let value: unknown = "a"
//! console.log(value.toUpperCase())

// we assigned type unknown to value even though we assigned a string to it. now the compiler is confused it the value has string methods or not.

// sol by type narrowing

//? let value: unknown = "a"
//? if (typeof value === "string") console.log(value.toUpperCase())
