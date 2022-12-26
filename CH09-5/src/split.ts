import * as R from 'ramda'

const words: string[] = R.split(' ')(`Hello Wrold!, I'm Peter.`)
console.log(words)      // [ 'Hello', 'Wrold!,', "I'm", 'Peter.' ]