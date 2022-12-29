// 타입 제한으로 코드 작성 시 문제 인식
const callMap = <T, U>(fn: (T) => U) => <T extends {map(fn)}>(b: T) => b.map(fn)
callMap(a => a + 1)([1])
callMap(a => a + 1)(1)