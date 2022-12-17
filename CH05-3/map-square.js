"use strict";
exports.__esModule = true;
var range_1 = require("./range");
var squres = (0, range_1.range)(1, 5 + 1)
    .map(function (val) { return val * val; });
console.log(squres); // [ 1, 4, 9, 16, 25 ]
