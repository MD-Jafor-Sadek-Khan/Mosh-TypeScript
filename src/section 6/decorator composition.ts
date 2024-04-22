type ComponentOptions2 = {
  selector: string
}

function Component3(options: ComponentOptions2) {
  return (constructor: Function) => {
    console.log('Component3 fired');
    
    constructor.prototype.options = options
    constructor.prototype.insertIntoDOM = ()=>{
        console.log("inserted into DOM");
        
    }
  }
}

function Pipe(constructor:Function){
    console.log("Pipe fired");
    
    constructor.prototype.pipe = true
}


@Component3({ selector: "#root" })
@Pipe
class AirPlane3 {}
