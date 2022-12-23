import { map } from './map'

const square = value => value * value
export const squaredMap = map(square)       // 5행처럼 굳ㅈ이 a를 지정하지 않음
// export const squaredMap a = > map(square)(a)