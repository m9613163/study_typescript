import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'
import { ILocation, makeRandomILocation } from './model/location'
import { ICoordinates, makeRandomICoordinates } from './model/coordinates'

const person: IPerson = makeRandomIPerson()
const location: ILocation = makeRandomILocation()
const coordinates: ICoordinates = makeRandomICoordinates()

const newLocation = R.mergeDeepRight(location, {coordinates})
const newPerson = R.mergeDeepRight(person, {location: newLocation})

console.log('person: ', person)
console.log('newPerson: ', newPerson)

// 실행 결과
/*
person:  {
  name: 'Viola Sparks',
  age: 32,
  title: 'Electro Optical Engineer',
  location: {
    country: 'CY',
    city: 'Asueraabi',
    address: '259 Nujek Heights',
    coordinates: { latitude: -2.14898, longitude: -79.22709 }
  }
}
newPerson:  {
  name: 'Viola Sparks',
  age: 32,
  title: 'Electro Optical Engineer',
  location: {
    country: 'LV',
    city: 'Dinmepa',
    address: '1464 Dojta Square',
    coordinates: { latitude: 16.84977, longitude: 105.48371 }
  }
}
*/