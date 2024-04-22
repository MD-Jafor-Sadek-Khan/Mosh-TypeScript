function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  target
  methodName
  const original = descriptor.value as Function
  descriptor.value = function (...args: any) {
    console.log("before")
    original.call(this, ...args)
    console.log("after")
  }
}

class Person11 {
  @Log
  say(message: string) {
    console.log("Person Says " + message)
  }
}

const person11 = new Person11()
person11.say("Hello")
