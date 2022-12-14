"use strict";
exports.__esModule = true;
exports.add = void 0;
var add = function (a) {
    var _add = function (b) {
        return a + b; // 클로저
    };
    return _add;
};
exports.add = add;
