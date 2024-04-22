function Component(constructor: Function) {
  console.log("decorator fired")
  constructor.prototype.insertIntoDOM = () => {
    console.log("inserted into DOM")
  }
}

@Component
class AirPlane {}
