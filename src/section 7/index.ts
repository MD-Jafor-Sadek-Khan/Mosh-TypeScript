import Store3, { Formats } from "./default exports"
import { Circle, Squre } from "./shapes"
import * as Vhiecle from "./wildcard import"
import { Burger, Coffee } from "./re-exporting food"

const circle = new Circle(5)
console.log(circle.area())

const squre = new Squre(12)
console.log(squre.area())

const store = new Store3()
let formate = Formats.Compressed

store
formate

const honda = new Vhiecle.Bike()
honda

const burger = new Burger()
const coffee = new Coffee()

burger
coffee
