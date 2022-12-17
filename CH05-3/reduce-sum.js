"use strict";
exports.__esModule = true;
var range_1 = require("./range");
var reduceSum = (0, range_1.range)(1, 100 + 1)
    .reduce(function (result, value) { return result + value; }, 0);
console.log(reduceSum); // 5050
