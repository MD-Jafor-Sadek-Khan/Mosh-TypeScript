function ToUpper(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  target
  methodName
  const original = descriptor.get
  descriptor.get = function () {
    const result = original?.call(this)

    return typeof result === "string" ? result.toLocaleUpperCase() : result
  }
}

class Person12 {
  constructor(public firstName: string, public lastName: string) {}

  @ToUpper
  get fullName() {
    return this.firstName + " " + this.lastName
  }
}

const person12 = new Person12("rahat", "khan")
console.log(person12.fullName)
