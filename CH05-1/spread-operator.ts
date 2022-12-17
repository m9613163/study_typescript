let array1: number[] = [1]
let array2_: number[] = [2, 3]
let mergedArray: number[] = [...array1, ...array2_, 4]
console.log(mergedArray)        // [1, 2, 3, 4]