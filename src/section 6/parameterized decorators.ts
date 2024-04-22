type ComponentOptions = {
  selector: string
}

function Component2(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("decorator fired")
    constructor.prototype.options = options
    constructor.prototype.insertIntoDOM = () => {
      console.log("inserted into DOM")
    }
  }
}

@Component2({ selector: "#root" })
class AirPlane2 {}
