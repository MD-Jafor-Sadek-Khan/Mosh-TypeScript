function read(document: unknown) {
  if (typeof document === "string") document.toLowerCase()
  else {
    console.log("error")
  }
}

read('i love mk')