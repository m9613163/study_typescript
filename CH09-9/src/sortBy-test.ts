import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'
import { displayPersons } from './displayPersons'

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson)
const nameSortedPersons = R.sortBy(R.prop('name'))(persons)
const ageSortedPersons = R.sortBy(R.prop('age'))(persons)

displayPersons('sorted by name: ')(nameSortedPersons)
displayPersons('sorted by age: ')(ageSortedPersons)

// 실행 결과
/*
sorted by name:  [
  { name: 'Gene Wade', age: 50 },    
  { name: 'Georgie Cohen', age: 27 },
  { name: 'Madge Bennett', age: 60 },
  { name: 'Rena Ortiz', age: 63 }    
]
sorted by age:  [
  { name: 'Georgie Cohen', age: 27 },
  { name: 'Gene Wade', age: 50 },    
  { name: 'Madge Bennett', age: 60 },
  { name: 'Rena Ortiz', age: 63 }    
]
*/