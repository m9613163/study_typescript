import * as R from 'ramda'

R.pipe(
    R.filter(R.flip(R.gte)(3)),
    R.tap(n => console.log(n))          // [ 3, 4, 5, 6, 7, 8, 9 ]
)(R.range(1, 9 + 1))