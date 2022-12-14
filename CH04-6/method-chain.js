"use strict";
exports.__esModule = true;
exports.calculator = void 0;
var calculator = /** @class */ (function () {
    function calculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    calculator.prototype.add = function (value) {
        this.value += value;
        return this;
    };
    calculator.prototype.multiply = function (value) {
        this.value *= value;
        return this;
    };
    return calculator;
}());
exports.calculator = calculator;
