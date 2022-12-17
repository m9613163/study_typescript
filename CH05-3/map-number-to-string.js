"use strict";
exports.__esModule = true;
var range_1 = require("./range");
var names = (0, range_1.range)(1, 5 + 1)
    .map(function (val, index) { return "[".concat(index, "]: ").concat(val); });
console.log(names); // '[0] 
