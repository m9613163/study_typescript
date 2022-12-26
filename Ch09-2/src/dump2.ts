// 포인트 없는 함수를 일반 화살표 함수로 만들어 오류가 발생한 ex
/*
import * as R from 'ramda'

export const dump = <T>(array: T[]): T[] => R.pipe(
    R.tap(n => console.log(n))
)(array)
*/

// 타입 단언을 사용하여 오류해결 ex
import * as R from 'ramda'

export const dump = <T>(array: T[]): T[] => R.pipe(
    R.tap(n => console.log(n))
)(array) as T[]