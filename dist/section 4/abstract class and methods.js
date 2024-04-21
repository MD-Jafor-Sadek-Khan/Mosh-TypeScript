"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Cirle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering Circle");
    }
}
const circle = new Cirle(5, 'red');
console.log(circle.render());
//# sourceMappingURL=abstract%20class%20and%20methods.js.map