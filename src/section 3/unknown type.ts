function read(document: unknown) {
  if (typeof document === "string") console.log(document)
  else {
    console.log("error")
  }
}

read('i love mk')