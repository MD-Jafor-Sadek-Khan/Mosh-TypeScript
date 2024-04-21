"use strict";
function kgToLbs(weight) {
    if (typeof weight === "string")
        return parseInt(weight) * 2.2;
    else
        return weight * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
//# sourceMappingURL=union.js.map