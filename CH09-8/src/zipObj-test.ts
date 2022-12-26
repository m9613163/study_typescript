import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'

const originalPerson: IPerson = makeRandomIPerson()
const keys: string[] = R.keys(originalPerson)
const values: any[] = R.values(originalPerson)
const zippedPerson: IPerson = R.zipObj(keys, values) as IPerson
console.log('originalPerson: ', originalPerson, 'zippedPerson: ', zippedPerson)

// 실행 결과
/*
originalPerson:  {
  name: 'Mabelle Salazar',
  age: 58,
  title: 'Quality Control Engineer',
  location: {
    country: 'IQ',
    city: 'Fiazuru',
    address: '1784 Agoveg Pass',
    coordinates: { latitude: 78.54779, longitude: -124.38023 }
  }
} zippedPerson:  {
  name: 'Mabelle Salazar',
  age: 58,
  title: 'Quality Control Engineer',
  location: {
    country: 'IQ',
    city: 'Fiazuru',
    address: '1784 Agoveg Pass',
    coordinates: { latitude: 78.54779, longitude: -124.38023 }
  }
}
*/