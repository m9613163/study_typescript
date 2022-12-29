import { IO } from "../classes/IO"

const result = IO.of((a1) => {
    console.log('io started', a1)           // io started 1
    return a1
})
.map(a2 => {
    console.log('first map called', a2)     // first map called 1
    return a2 + 1
})
.runIO(1)
console.log(result)         // 2