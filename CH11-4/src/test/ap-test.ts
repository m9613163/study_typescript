import { Identity } from "../classes/Identity"  // 11-2절의 src/classes/Identity.ts

const add = (a: number) => (b: number) => a + b
console.log(
    add(1)(2),                                  // 3
    Identity.of(add).ap(1).ap(2).value()        // 3
)