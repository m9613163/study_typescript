import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'

const person: IPerson = makeRandomIPerson()
const pairs: [string, any][] = R.toPairs(person)
console.log('pairs', pairs)

// 실행 결과
/*
pairs [
  [ 'name', 'Juan Morrison' ],     
  [ 'age', 52 ],
  [ 'title', 'Employment Agent' ], 
  [
    'location',
    {
      country: 'TL',
      city: 'Homatupi',
      address: '1806 Tehsij Place',
      coordinates: [Object]        
    }
  ]
]
*/