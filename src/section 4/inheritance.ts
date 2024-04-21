class Person2 {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName
  }

  walk() {
    return 'walking'
  }
}

class Student extends Person2 {
  constructor(public id: number, firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  exam() {
    return "giving exam"
  }
}


const student = new Student(1, 'rahat', 'khan')
console.log(student.fullName);
console.log(student.walk());
console.log(student.exam());

