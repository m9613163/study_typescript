"use strict";
exports.__esModule = true;
var mergeArray_1 = require("./mergeArray");
var mergedArray1 = (0, mergeArray_1.mergeArray)(['Hello'], ['World']);
console.log(mergedArray1); // [ 'Hello', 'World' ]
var mergedArray2 = (0, mergeArray_1.mergeArray)([1], [2, 3], [4, 5, 6], [7, 8, 9, 10]);
console.log(mergedArray2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
