import * as R from 'ramda'

const left = {name: 'Jack'}, right = {name: 'Jnae', age: 32}
const person = R.mergeRight(left, right)
console.log(person)         // { name: 'Jane', age: 32 }