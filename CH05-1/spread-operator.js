var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var array1 = [1];
var array2_ = [2, 3];
var mergedArray = __spreadArray(__spreadArray(__spreadArray([], array1, true), array2_, true), [4], false);
console.log(mergedArray); // [1, 2, 3, 4]
