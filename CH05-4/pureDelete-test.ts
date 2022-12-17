import { pureDelete } from './pureDelete'

const mixedArray: object[] = [
    [], {name: 'Jack'}, {name: 'Jane', age: 32}, ['description']
]
const objectsOnly: object[] = pureDelete(mixedArray, (val) => Array.isArray(val))
console.log(mixedArray, objectsOnly)

// 실행결과
// [ [], { name: 'Jack' }, { name: 'Jane', age: 32 }, [ 'description' ] ] [ { name: 'Jack' }, { name: 'Jane', age: 32 } ]