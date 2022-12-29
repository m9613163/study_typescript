import { IO } from "../classes/IO"

const chainDB = a2 => IO.of(() => {
    console.log('first chain called', a2)       // first chain called 1
    return a2 + 1
})

const result = IO.of((a1) => {
    console.log('io started', a1)           // io started 1
    return a1
})
.chain(chainDB)
.runIO(1)
console.log(result)             // 2