"use strict";
exports.__esModule = true;
var doSomething_1 = require("./doSomething");
var _a = (0, doSomething_1.doSomething)(), result = _a[0], errorMessage = _a[1];
console.log(result, errorMessage); // false Some error occurs...
