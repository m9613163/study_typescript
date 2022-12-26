import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'
import { displayPersons } from './displayPersons'

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson)
//@ts-ignore
const nameSortedPersons = R.sortWith([
    //@ts-ignore
    R.descend(R.prop('name'))
])(persons)

displayPersons('sorted by name: ')(nameSortedPersons)

// 실행 결과
/*
sorted by name:  [
  { name: 'Warren Pittman', age: 19 },
  { name: 'Vernon Abbott', age: 53 },
  { name: 'Jeremiah Hudson', age: 21 },
  { name: 'Elva Nelson', age: 23 }
]
*/