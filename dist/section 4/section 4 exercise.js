"use strict";
class Person6 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Person7 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
let person = new Person7('rahat', 'khan');
console.log(person.fullName);
//# sourceMappingURL=section%204%20exercise.js.map