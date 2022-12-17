"use strict";
exports.__esModule = true;
exports.doSomething = void 0;
var doSomething = function () {
    try {
        throw new Error('Some error ouccurs...');
    }
    catch (e) {
        return [false, e.message];
    }
};
exports.doSomething = doSomething;
