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
exports.map = void 0;
var map = function (array, callback) {
    var result = [];
    for (var index = 0; index < array.length; ++index) {
        var value = array[index];
        result = __spreadArray(__spreadArray([], result, true), [callback(value, index)], false);
    }
    return result;
};
exports.map = map;
