"use strict";
exports.__esModule = true;
var pureDelete_1 = require("./pureDelete");
var mixedArray = [
    [], { name: 'Jack' }, { name: 'Jane', age: 32 }, ['description']
];
var objectsOnly = (0, pureDelete_1.pureDelete)(mixedArray, function (val) { return Array.isArray(val); });
console.log(mixedArray, objectsOnly);
// 실행결과
