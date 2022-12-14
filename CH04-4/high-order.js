var add = function (a) { return function (b) { return a + b; }; };
var result = add(1)(2);
console.log(result);
