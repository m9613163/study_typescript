var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var part1 = { name: 'Jane' }, part2 = { age: 32 }, part3 = { city: 'Seoul', country: 'kr' };
var merged = __assign(__assign(__assign({}, part1), part2), part3);
console.log(merged);
