"use strict";
exports.__esModule = true;
exports.pureDelete = void 0;
var pureDelete = function (array, cb) { return array.filter(function (val, index) { return cb(val, index) == false; }); };
exports.pureDelete = pureDelete;
