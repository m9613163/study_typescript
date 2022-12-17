"use strict";
exports.__esModule = true;
var range_1 = require("./range"); // 05-1 절에서 작성한 range.ts
var fold_1 = require("./fold");
// 입력 데이터 생성
var numbers = (0, range_1.range)(1, 100 + 1);
//입력 데이터 가공
var result = (0, fold_1.fold)(numbers, function (result, value) { return result + value; }, 0);
console.log(numbers); // [1, 2, ..., 100]
console.log(result); // 5050
