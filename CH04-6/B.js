"use strict";
exports.__esModule = true;
exports.B = void 0;
var B = /** @class */ (function () {
    function B(value) {
        if (value === void 0) { value = 1; }
        this.value = value;
    }
    B.prototype.method = function () {
        console.log("value: ".concat(this.value));
    };
    return B;
}());
exports.B = B;
