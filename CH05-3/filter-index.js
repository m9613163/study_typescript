"use strict";
exports.__esModule = true;
var range_1 = require("./range");
var array = (0, range_1.range)(1, 10 + 1);
var half = array.length / 2;
var belowHalf = array.filter(function (v, index) { return index < half; });
var overHalf = array.filter(function (v, index) { return index >= half; });
console.log(belowHalf, overHalf); // [ 1, 2, 3, 4, 5 ] [ 6, 7, 8, 9, 10 ]
