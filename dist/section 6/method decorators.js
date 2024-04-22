"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(target, methodName, descriptor) {
    target;
    methodName;
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("before");
        original.call(this, ...args);
        console.log("after");
    };
}
class Person11 {
    say(message) {
        console.log("Person Says " + message);
    }
}
__decorate([
    Log
], Person11.prototype, "say", null);
const person11 = new Person11();
person11.say("Hello");
//# sourceMappingURL=method%20decorators.js.map