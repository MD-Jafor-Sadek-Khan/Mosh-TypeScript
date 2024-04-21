function sayMyName(name: string | null | undefined): void {
  if (name) console.log(name)
  else if (name === null) {
    console.log("null")
  } else {
    console.log("undefined")
  }
}

sayMyName(null)
sayMyName(undefined)
sayMyName("mukta")
