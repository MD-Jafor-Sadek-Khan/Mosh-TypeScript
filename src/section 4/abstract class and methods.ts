abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void
}

class Cirle extends Shape {
  constructor(public radius: number, color: string) {
    super(color)
  }

  override render() {
    console.log("Rendering Circle")
  }
}


const circle = new Cirle(5,'red')

console.log(circle.render());
