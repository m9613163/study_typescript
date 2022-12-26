import * as R from 'ramda'
import { makeRandomIPerson } from './model/person'

const values: any[] = R.values(makeRandomIPerson())
console.log('values: ', values)

// 실행 결과
/*
values:  [
  'Ann Warner',
  19,
  'Education Adminator',
  {
    country: 'GT',
    city: 'Pagowta',
    address: '818 Kodis Extension',
    coordinates: { latitude: -6.20195, longitude: 58.3716 }
  }
]
*/