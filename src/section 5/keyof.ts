interface Product10 {
  propertyName: string
  price: number
}

class Store2<T> {
  protected _objects: T[] = []

  add(obj: T): void {
    this._objects.push(obj)
  }

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value)
  }
}

const store = new Store2<Product10>()
store.add({ propertyName: "jacket", price: 10 })
store.add({ propertyName: "hat", price: 5 })
store.add({ propertyName: "cap", price: 2 })
const found = store.find("propertyName", "hat")
console.log(found)
