"use strict";
function echo(value) {
    return value;
}
const test3 = echo(1);
const test4 = echo("1");
function echo2(value) {
    return value;
}
const test5 = echo2({ name: "a" });
function echo3(value) {
    return value;
}
const test6 = echo3({ name: "a" });
class Person6 {
    constructor(name) {
        this.name = name;
    }
}
class Employee2 extends Person6 {
}
function echo4(value) {
    return value;
}
const person = new Person6("rahat");
const employee3 = new Employee2("khan");
const test7 = echo4(person);
const test8 = echo4(employee3);
console.log(test7, test8);
//# sourceMappingURL=generic%20constrainsts.js.map