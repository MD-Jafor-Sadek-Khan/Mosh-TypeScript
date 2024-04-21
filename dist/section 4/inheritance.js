"use strict";
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        return 'walking';
    }
}
class Student extends Person2 {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    exam() {
        return "giving exam";
    }
}
const student = new Student(1, 'rahat', 'khan');
console.log(student.fullName);
console.log(student.walk());
console.log(student.exam());
//# sourceMappingURL=inheritance.js.map