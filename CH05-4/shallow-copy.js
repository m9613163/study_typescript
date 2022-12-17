var originalArray = [5, 3, 9, 7];
var shallowCopiedArray = originalArray;
shallowCopiedArray[0] = 0;
console.log(originalArray, shallowCopiedArray); // [0, 3, 9, 7] [0, 3, 9, 7]
