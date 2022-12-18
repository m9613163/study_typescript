import { RangeIterable } from "./RangeIterable"
const iterator = new RangeIterable(1, 3 + 1)

for(let value of iterator)
    console.log(value)

// 실행결과
// 1
// 2
// 3