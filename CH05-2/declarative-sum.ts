import { range } from "./range"     // 05-1 절에서 작성한 range.ts
import { fold } from "./fold"

// 입력 데이터 생성
let numbers: number[] = range(1, 100 + 1)

//입력 데이터 가공
let result = fold(numbers, (result, value) => result + value, 0)
console.log(numbers)        // [1, 2, ..., 100]
console.log(result)         // 5050