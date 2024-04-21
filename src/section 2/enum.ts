enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Large
const muktasSize: Size = Size.Small
console.log(mySize, muktasSize)

// optimized version

const enum Color {
  Red = "r",
  Blue = "b",
  Yellow = "y",
}

let myColor: Color = Color.Blue
const muktasColor: Color = Color.Blue
console.log(myColor, muktasColor)
