/*
 * Define a class called Logger that takes the name of a file in its constructor and provides a method for writing messages to that file. Don’t worry about the actual file I/O operations. Just define the class with the right members.
 */

// sol

/*
?    class Logger {
?      constructor(private fileName: string) {}
?    
?      set writeOnFile(text: string) {
?        this.fileName = this.fileName + " " + text
?      }
?    
?      get file(): string {
?        return this.fileName
?      }
?    }
?    
?    let file = new Logger("testFile")
?    file.writeOnFile="rahat"
?    console.log(file.file);
*/

/*
 * Given the Person6 class below, create a getter for getting the full name of a person.
 */
/*
!  class Person6 {
!    constructor(public firstName: string, public lastName: string) {}
!  }
*/
// sol

/*
?    class Person7 {
?      constructor(public firstName: string, public lastName: string) {}
?    
?      get fullName(): string {
?        return this.firstName + " " + this.lastName
?      }
?    }
?    let person = new Person7("rahat", "khan")
?    
?    console.log(person.fullName)


*/

/*
 * Create a new class called Employee that extends Person and adds a new property called salary.
 */

// sol

/*
?   class Person8 {
?       constructor(public firstName: string, public lastName: string) {}
?     
?       get fullName(): string {
?         return this.firstName + " " + this.lastName
?       }
?     }
?   
?   
?   
?   class Employee2 extends Person8 {
?     constructor(public salary: number, firstName: string, lastName: string) {
?       super(firstName, lastName)
?     }
?   }


*/

//* What is the difference between private and protected members?

// sol

//? private members are accessable only within its class, on the other hand protected members are accessable through child classes as well.

//?  we use private keyword to declare private members and we use protected keyword to declare protected members

//* Given the data below, define an interface for representing employees:

/*
!   let employee3 = {
!     name: "John Smith",
!     salary: 50_000,
!     address: {
!       street: "Flinders st",
!       city: "Melbourne",
!       zipCode: 3144,
!     },
!   } 

 */

// sol

/*
?   interface Address {
?     street: string
?     city: string
?     zipCode: number
?   }
?   interface IEmployee {
?     name: string
?     salary: number
?     address: Address
?   }
?   
?   let employee4: IEmployee = {
?     name: "John Smith",
?     salary: 50_000,
?     address: {
?       street: "Flinders st",
?       city: "Melbourne",
?       zipCode: 3144,
?     },
?   }


*/
