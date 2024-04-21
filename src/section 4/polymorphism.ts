class Person4 {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName
  }

  walk() {
    return "walking"
  }
}

class Student3 extends Person4 {
  constructor(public id: number, firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  exam() {
    return "giving exam"
  }
}

class Teacher2 extends Person4 {
  override get fullName() {
    return "Professor" + " " + super.fullName
  }
}

class Principle extends Person4 {
  constructor(public school: string, firstNamee: string, lastName: string) {
    super(firstNamee, lastName)
  }
  override get fullName() {
    return "Principle " + super.fullName + ' of ' + this.school
  }
}

function getPerson(persons: Person4[]): void {
  for (let person of persons) {
    console.log(person.fullName)
  }
}

const personArray: Person4[] = [
  new Student3(1, "natasha", "milly"),
  new Teacher2("natasha", "milly"),
  new Principle('Zia school',"natasha", "milly"),
]

getPerson(personArray)
