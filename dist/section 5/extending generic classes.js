"use strict";
class Product9 {
    constructor(name) {
        this.name = name;
    }
}
class Store {
    constructor() {
        this._objects = [];
    }
    store(obj) {
        this._objects.push(obj);
    }
}
class CompressStore extends Store {
    compress() { }
}
class SearchableStore extends Store {
    find(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class Product9Store extends Store {
    filterByCategory(category) {
        category;
        return [];
    }
}
const product2 = new Product9('rahat');
const test9 = new Product9Store();
test9.filterByCategory('shirt');
//# sourceMappingURL=extending%20generic%20classes.js.map