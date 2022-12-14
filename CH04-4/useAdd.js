"use strict";
exports.__esModule = true;
var add_1 = require("./add");
var fn = (0, add_1.add)(1);
var result = fn(2);
console.log(result); // 3
console.log((0, add_1.add)(1)(2)); // 3
