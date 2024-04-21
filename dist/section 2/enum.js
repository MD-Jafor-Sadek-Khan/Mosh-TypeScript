"use strict";
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Large;
const muktasSize = Size.Small;
console.log(mySize, muktasSize);
let myColor = "b";
const muktasColor = "b";
console.log(myColor, muktasColor);
//# sourceMappingURL=enum.js.map