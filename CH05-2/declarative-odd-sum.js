"use strict";
exports.__esModule = true;
var range_1 = require("./range");
var fold_1 = require("./fold");
var filter_1 = require("./filter");
var numbers = (0, range_1.range)(1, 100 + 1);
var isOdd = function (n) { return n % 2 != 0; };
var result = (0, fold_1.fold)((0, filter_1.filter)(numbers, isOdd), function (result, value) { return result + value; }, 0);
console.log(result); // 2500
