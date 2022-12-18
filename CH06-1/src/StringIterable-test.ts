import { StringIterable } from "./StringIterable"
for(let value of new StringIterable(['Hello', 'World', '!']))
    console.log(value)

// 실행결과
// Hello
// World
// !    