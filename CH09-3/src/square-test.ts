import * as R from 'ramda'
import { square } from './f-using-ramda'

const input: number[] = R.range(1, 9 +1)
const squareAfterInc = R.pipe(
    R.inc,                          // (x + 1)
    square                          // (x + 1) ** 2
)
const squareResult = R.pipe(
    R.map(squareAfterInc),
    R.tap(a => console.log(a))      // [ 4, 9, 16,  25, 36, 49, 64, 81, 100 ]
)(input)