"use strict";
exports.__esModule = true;
var createRangeIterable_1 = require("./createRangeIterable");
var iterator = (0, createRangeIterable_1.createRangeIterable)(1, 3 + 1); // 반복기는 현재 동작하지 않음
while (true) {
    var _a = iterator.next(), value = _a.value, done = _a.done; // 반복기 동작 시킴
    if (done)
        break;
    console.log(value); // 1 2 3
}
