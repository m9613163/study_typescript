import * as R from 'ramda'

const left = {name: 'Jack'}, right = {name: 'Jnae', age: 32}
const person = R.mergeLeft(left, right)
console.log(person)         // { name: 'Jack', age: 32 }