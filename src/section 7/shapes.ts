export class Circle {
  constructor(public radius: number) {}

  area() {
    return Math.PI * this.radius ** 2
  }
}

export class Squre {
  constructor(public side: number) {}

  area() {
    return this.side ** 2
  }
}
