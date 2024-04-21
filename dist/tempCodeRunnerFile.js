function calculateTax(income, taxYear = 2024) {
    if (taxYear < 2024) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculateTax(90000, 2022));