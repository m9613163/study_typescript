"use strict";
exports.__esModule = true;
var pureSort_1 = require("./pureSort");
var beforeSort = [6, 2, 9, 0];
var afterSort = (0, pureSort_1.pureSort)(beforeSort);
console.log(beforeSort, afterSort); // [ 6, 2, 9, 0 ] [ 0, 2, 6, 9 ]
