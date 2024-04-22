"use strict";
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
const testVal = ArrayUtils.wrapInArray(125);
const testVal2 = ArrayUtils.wrapInArray("125");
console.log(testVal, testVal2);
//# sourceMappingURL=generic%20functions.js.map