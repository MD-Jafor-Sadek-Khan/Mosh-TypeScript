function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string
    const descriptor: PropertyDescriptor = {
      get() {
        return value
      },

      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(
            `${propertyName} can not be less than ${length} charecters`
          )
        }
        value = newValue
      },
    }
    Object.defineProperty(target, propertyName, descriptor)
  }
}

class User2 {
  @MinLength(5)
  password: string

  constructor(password: string) {
    this.password = password
  }
}

const password1 = new User2("1234")
