class Product9{
    constructor(public name:string){}
}


class Store<T> {
  protected _objects: T[] = []

  store(obj: T) {
    this._objects.push(obj)
  }
}

class CompressStore<T> extends Store<T> {
  compress() {}
}

class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name)
  }
}

class Product9Store extends Store<Product9>{
    filterByCategory(category:string){
        category
        return []
    }
}

const product2 = new Product9('rahat')
const test9 = new Product9Store()
test9.filterByCategory('shirt')