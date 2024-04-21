function kgToLbs(weight: number | string): number {
  if (typeof weight === "string") return parseInt(weight) * 2.2
  else return weight * 2.2
}

console.log(kgToLbs(10))

console.log(kgToLbs("10kg"))
