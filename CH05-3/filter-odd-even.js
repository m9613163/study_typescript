"use strict";
exports.__esModule = true;
var range_1 = require("./range");
var array = (0, range_1.range)(1, 10 + 1);
var odds = array.filter(function (value) { return value % 2 != 0; });
var evens = array.filter(function (value) { return value % 2 == 0; });
console.log(odds, evens); // [ 1, 3, 5, 7, 9 ] [ 2, 4, 6, 8, 10 ]
