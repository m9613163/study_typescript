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
exports.filter = void 0;
var filter = function (array, callback) {
    var result = [];
    for (var index = 0; index < array.length; ++index) {
        var value = array[index];
        if (callback(value, index))
            result = __spreadArray(__spreadArray([], result, true), [value], false);
    }
    return result;
};
exports.filter = filter;
