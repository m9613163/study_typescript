var add = new Function('a', 'b', 'return a + b');
var result = add(1, 2);
console.log(result); // 3
var add2 = function (a, b) { return a + b; };
console.log(add2(1, 2)); // 3
