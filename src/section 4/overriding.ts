class Person3 {
    constructor(public firstName: string, public lastName: string) {}
  
    get fullName() {
      return this.firstName + " " + this.lastName
    }
  
    walk() {
      return 'walking'
    }
  }
  
  class Student2 extends Person3 {
    constructor(public id: number, firstName: string, lastName: string) {
      super(firstName, lastName)
    }
  
    exam() {
      return "giving exam"
    }
  }
  
  class Teacher extends Person3{
    override get fullName() {
        return "Professor" + ' ' + super.fullName
    }
  }
  

let teacher = new Teacher('mukta','sagol')
console.log(teacher.fullName);

  
  
  