"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Squre = exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
exports.Circle = Circle;
class Squre {
    constructor(side) {
        this.side = side;
    }
    area() {
        return this.side ** 2;
    }
}
exports.Squre = Squre;
//# sourceMappingURL=shapes.js.map