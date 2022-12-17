"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.mergeArray = void 0;
var mergeArray = function () {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var result = [];
    for (var index = 0; index < arrays.length; index++) {
        var array = arrays[index];
        // result와 array 배열을 각각 전개(spread)하고 결합(merge)해야
        // T[] 타입 배열을 생성할 수 있음
        result = __spreadArray(__spreadArray([], result, true), array, true);
    }
    return result;
};
exports.mergeArray = mergeArray;
