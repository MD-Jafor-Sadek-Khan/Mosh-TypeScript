function calculateTax(income: number, taxYear = 2024): number {
  if (taxYear < 2024) {
    return income * 1.2
  }
  return income * 1.3
}

console.log(calculateTax(90_000, 2022));
