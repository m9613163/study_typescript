import { makeRandomILocation, ILocation } from "./model/location"

const location: ILocation = makeRandomILocation()
console.log(location)

// 실행 결과
/*
{
  country: 'UM',
  city: 'Jegewec',
  address: '95 Hejfec Court',
  coordinates: { latitude: -29.97005, longitude: 164.43673 }
}
*/