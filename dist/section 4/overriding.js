"use strict";
class Person3 {
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
class Student2 extends Person3 {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    exam() {
        return "giving exam";
    }
}
class Teacher extends Person3 {
    get fullName() {
        return "Professor" + ' ' + super.fullName;
    }
}
let teacher = new Teacher('mukta', 'sagol');
console.log(teacher.fullName);
//# sourceMappingURL=overriding.js.map