import { IPerson, makeRandomIPerson } from "./model/person"

const person: IPerson = makeRandomIPerson()
console.log(person)

// 실행 결과
/*
{
  name: 'Abbie Garza',
  age: 38,
  title: 'Health Care Manager',
  location: {
    country: 'CX',
    city: 'Jedipap',
    address: '1704 Kunbu Pike',
    coordinates: { latitude: 56.07556, longitude: 125.13919 }
  }
}
*/