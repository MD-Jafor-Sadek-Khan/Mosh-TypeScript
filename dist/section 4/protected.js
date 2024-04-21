"use strict";
class Person5 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        return "walking";
    }
}
class Student4 extends Person5 {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    exam() {
        return "giving exam and " + this.walk();
    }
}
class Teacher3 extends Person5 {
    get fullName() {
        return "Professor" + " " + super.fullName;
    }
}
class Principle2 extends Person5 {
    constructor(school, firstNamee, lastName) {
        super(firstNamee, lastName);
        this.school = school;
    }
    get fullName() {
        return "Principle2 " + super.fullName + " of " + this.school;
    }
}
function getPerson2(persons) {
    for (let person of persons) {
        console.log(person.fullName);
    }
}
const personArray2 = [
    new Student4(1, "natasha", "milly"),
    new Teacher3("natasha", "milly"),
    new Principle2("Zia school", "natasha", "milly"),
];
getPerson2(personArray2);
const student5 = new Student4(2, "test", "student");
console.log(student5.exam());
//# sourceMappingURL=protected.js.map