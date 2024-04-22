"use strict";
class Store2 {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
const store = new Store2();
store.add({ propertyName: "jacket", price: 10 });
store.add({ propertyName: "hat", price: 5 });
store.add({ propertyName: "cap", price: 2 });
const found = store.find("propertyName", "hat");
console.log(found);
//# sourceMappingURL=keyof.js.map