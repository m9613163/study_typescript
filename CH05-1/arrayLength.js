"use strict";
exports.__esModule = true;
exports.isEmpty = exports.arrayLength = void 0;
var arrayLength = function (array) { return array.length; };
exports.arrayLength = arrayLength;
var isEmpty = function (array) { return (0, exports.arrayLength)(array) == 0; };
exports.isEmpty = isEmpty;
