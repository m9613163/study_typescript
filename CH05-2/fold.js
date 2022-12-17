"use strict";
exports.__esModule = true;
exports.fold = void 0;
// fold 함수
var fold = function (array, callback, initValue) {
    var result = initValue;
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        result = callback(result, value);
    }
    return result;
};
exports.fold = fold;
