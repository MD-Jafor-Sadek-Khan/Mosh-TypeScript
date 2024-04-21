class Person {
  constructor(public name: string) {}
}

class SeatAssingment {
  [seatNumber: string]: Person
}



const seat = new SeatAssingment()
seat.A1 = new Person('rahat')
seat.A2 = new Person("mukta")

console.log(seat);

