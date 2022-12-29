// work 함수의 동작 시점을 알게 하는 실행 결과
import { IO } from "../classes/IO"

const work = () => {
    console.log('work called...')
    return { name: 'Jack', age: 32}
}
const result = IO.of(work).runIO()
console.log(result) 

// 실행 결과
// work called...
// { name: 'Jack', age: 32 }