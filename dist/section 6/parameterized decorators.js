"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component2(options) {
    return (constructor) => {
        console.log("decorator fired");
        constructor.prototype.options = options;
        constructor.prototype.insertIntoDOM = () => {
            console.log("inserted into DOM");
        };
    };
}
let AirPlane2 = class AirPlane2 {
};
AirPlane2 = __decorate([
    Component2({ selector: "#root" })
], AirPlane2);
//# sourceMappingURL=parameterized%20decorators.js.map