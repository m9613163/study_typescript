"use strict";
exports.__esModule = true;
var RangeIterable_1 = require("./RangeIterable");
var iterator = new RangeIterable_1.RangeIterable(1, 3 + 1);
for (var _i = 0, iterator_1 = iterator; _i < iterator_1.length; _i++) {
    var value = iterator_1[_i];
    console.log(value);
}
// 실행결과
// 1
// 2
// 3
