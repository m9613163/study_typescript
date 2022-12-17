var multiply = function (result, val) { return result * val; }; // 7행에서 사용
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tempResult = numbers
    .filter(function (val) { return val % 2 != 0; })
    .map(function (val) { return val * val; })
    .reduce(multiply, 1);
var result = Math.round(Math.sqrt(tempResult));
console.log(result); // 945
