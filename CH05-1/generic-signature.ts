// 함수 시그니처 사용 오류
const normal = (cb: (number) => number): void => {}
const error = (cb: (number, number?) => number): void => {}
const fixed = (cb: (a: number, number?) => number): void => {}