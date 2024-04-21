"use strict";
function sayMyName(name) {
    if (name)
        console.log(name);
    else if (name === null) {
        console.log("null");
    }
    else {
        console.log("undefined");
    }
}
sayMyName(null);
sayMyName(undefined);
sayMyName("mukta");
//# sourceMappingURL=null.js.map