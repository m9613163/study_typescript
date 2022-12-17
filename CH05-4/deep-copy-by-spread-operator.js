var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var oArray = [1, 2, 3, 4];
var deepCopiedArray = __spreadArray([], oArray, true);
deepCopiedArray[0] = 0;
console.log(oArray, deepCopiedArray); // [ 1, 2, 3, 4 ] [ 0, 2, 3, 4 ]
