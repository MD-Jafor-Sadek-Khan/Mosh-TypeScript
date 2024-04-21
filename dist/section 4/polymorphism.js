"use strict";
class Person4 {
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
class Student3 extends Person4 {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    exam() {
        return "giving exam";
    }
}
class Teacher2 extends Person4 {
    get fullName() {
        return "Professor" + " " + super.fullName;
    }
}
class Principle extends Person4 {
    constructor(school, firstNamee, lastName) {
        super(firstNamee, lastName);
        this.school = school;
    }
    get fullName() {
        return "Principle " + super.fullName + ' of ' + this.school;
    }
}
function getPerson(persons) {
    for (let person of persons) {
        console.log(person.fullName);
    }
}
const personArray = [
    new Student3(1, "natasha", "milly"),
    new Teacher2("natasha", "milly"),
    new Principle('Zia school', "natasha", "milly"),
];
getPerson(personArray);
//# sourceMappingURL=polymorphism.js.map