function processEvents(): never {
  while (true) {}
}
function reject(message: string): never {
  throw new Error(message)
}

// reject("...")
// console.log("hello world")
