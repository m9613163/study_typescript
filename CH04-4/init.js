"use strict";
exports.__esModule = true;
exports.init = void 0;
var init = function (callback) {
    console.log('default initialization finished.');
    callback();
    console.log('all initialization finished.');
};
exports.init = init;
