// 색인 가능 타입 사용해 속성 이름만 다른 객체 만드는 ex
export type KeyValueType = {
    [key: string]: string
}
export const makeObject = (key: string, value: string): KeyValueType => ({[key]: value})

console.log(makeObject('name', 'Jack'))
console.log(makeObject('firstName', 'Jane'))