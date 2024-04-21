// exercise 1

// number
let a = 100
// string
let b = "Coffee"

// boolean[]
let c = [true, false, false]
// {age:string}
let d = { age: "number" }
// number[]
let e = [3]
// any
let f
// any[]
let g = []

// exercise 2


// snippet 1 

// two parameters are being expected by the song function yet one was given

let song: {
  title: string
  releaseYear: number
} = { title: "My song" }

// sol

let song2: {
  title: string
  releaseYear: number
} = { title: "My song", releaseYear: 2022 }

// or
let song3: {
  title: string
  releaseYear?: number
} = { title: "My song" }


// snippet 2

//  prices is of type number[] so assinging a string value to index 0 is causing the error
let prices = [100, 200, 300]
prices[0] = "$100"

// sol

let prices2 = [100, 200, 300]
prices2[0] = 100


// snippet 3

// suppose to return a "number" but is returning "undefined"
function myFunc(a: number, b: number): number {}

// sol

function myFunc2(a: number, b: number): number {
  return a + b
}

// exercise 1
// exercise 1
