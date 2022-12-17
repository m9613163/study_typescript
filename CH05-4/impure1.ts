// 불순 함수 ex
//impure1 함수 몸통에서 array 매개변수로 전달받은 배열은 push와 splice 메서드를 호출함으로써 내용이 달라짐
//즉, 매개변수가 readonly 형태로 동작하지 않으므로 불순 함수
function impure1(array: number[]): void {
	array.push(1)
	array.splice(0, 1)
}