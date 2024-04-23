"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_exports_1 = __importStar(require("./default exports"));
const shapes_1 = require("./shapes");
const Vhiecle = __importStar(require("./wildcard import"));
const re_exporting_food_1 = require("./re-exporting food");
const circle = new shapes_1.Circle(5);
console.log(circle.area());
const squre = new shapes_1.Squre(12);
console.log(squre.area());
const store = new default_exports_1.default();
let formate = default_exports_1.Formats.Compressed;
store;
formate;
const honda = new Vhiecle.Bike();
honda;
const burger = new re_exporting_food_1.Burger();
const coffee = new re_exporting_food_1.Coffee();
burger;
coffee;
//# sourceMappingURL=index.js.map