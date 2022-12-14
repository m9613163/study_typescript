"use strict";
exports.__esModule = true;
var method_chain_1 = require("./method-chain");
var calc = new method_chain_1.calculator;
var result = calc.add(1).add(2).multiply(3).multiply(4).value;
console.log(result); // (0 + 1 + 2) * 3 * 4 = 36
