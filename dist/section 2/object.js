"use strict";
const employee = {
    id: 1,
    name: "rahat",
    retire: (date) => {
        console.log(date);
    },
};
employee.name = "mukta";
const today = new Date();
console.log(employee.retire(today));
//# sourceMappingURL=object.js.map