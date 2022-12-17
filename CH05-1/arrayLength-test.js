"use strict";
exports.__esModule = true;
var arrayLength_1 = require("./arrayLength");
var numArray = [1, 2, 3];
var strArray = ['Hello', 'World'];
var personArray = [{ name: 'Jack' }, { name: 'Jane', age: 32 }];
console.log((0, arrayLength_1.arrayLength)(numArray), // 3
(0, arrayLength_1.arrayLength)(strArray), // 2
(0, arrayLength_1.arrayLength)(personArray), // 2
(0, arrayLength_1.isEmpty)([]), // true
(0, arrayLength_1.isEmpty)([1]) // false
);
