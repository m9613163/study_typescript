import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'

const pairs: [string, any][] = R.toPairs(makeRandomIPerson())
const person: IPerson = R.fromPairs(pairs) as IPerson
console.log('person: ', person)

// 실행 결과
/*
person:  {
  name: 'Augusta Morton',
  age: 58,
  title: 'Supply Chain Director',
  location: {
    country: 'PH',
    city: 'Butlojtus',
    address: '196 Lilon Point',
    coordinates: { latitude: 46.04054, longitude: -134.16569 }
  }
}
*/