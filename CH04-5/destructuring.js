"use strict";
exports.__esModule = true;
var printPerson = function (_a) {
    var name = _a.name, age = _a.age;
    return console.log("name: ".concat(name, ", age: ").concat(age));
};
printPerson({ name: 'Jack', age: 10 }); // name: Jack, age: 10
