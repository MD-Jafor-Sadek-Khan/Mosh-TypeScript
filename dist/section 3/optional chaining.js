"use strict";
var _a;
function getCustomer(id) {
    if (id === 0) {
        return null;
    }
    else {
        return { birthday: new Date() };
    }
}
const customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=optional%20chaining.js.map