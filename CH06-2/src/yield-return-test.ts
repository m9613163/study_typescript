import { random, gen } from "./yield-return"
const iter = gen()
while(true) {
    const {value, done} = iter.next(random(10, 1))
    if(done) break
    console.log(value)
}

// 실행 결과
// you select 0
// you select 7
// you select 5
// you select 10
// you select 4