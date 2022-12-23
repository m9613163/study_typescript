import { f, g, h } from './f-g-h'
import { compose } from './compose'

const composedFGH = compose(f, g, f)
console.log(
    composedFGH('x')        // h(g(f(x)))
)