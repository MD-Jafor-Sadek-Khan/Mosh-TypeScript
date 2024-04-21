class Person5 {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName
  }

  protected walk() {
    return "walking"
  }
}

class Student4 extends Person5 {
  constructor(public id: number, firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  exam() {

    return "giving exam and " + this.walk()
  }
}

class Teacher3 extends Person5 {
  override get fullName() {
    return "Professor" + " " + super.fullName
  }
}

class Principle2 extends Person5 {
  constructor(public school: string, firstNamee: string, lastName: string) {
    super(firstNamee, lastName)
  }
  override get fullName() {
    return "Principle2 " + super.fullName + " of " + this.school
  }
}

function getPerson2(persons: Person5[]): void {
  for (let person of persons) {
    console.log(person.fullName)
  }
}

const personArray2: Person5[] = [
  new Student4(1, "natasha", "milly"),
  new Teacher3("natasha", "milly"),
  new Principle2("Zia school", "natasha", "milly"),
]

getPerson2(personArray2)
const student5 = new Student4(2, "test", "student")
console.log(student5.exam())
