"use strict";
exports.__esModule = true;
var range_1 = require("./range");
var fold_1 = require("./fold");
var map_1 = require("./map");
var numbers = (0, range_1.range)(1, 100 + 1);
var result = (0, fold_1.fold)((0, map_1.map)(numbers, function (value) { return value * value; }), function (result, value) { return result + value; }, 0);
console.log(result); // 338350
