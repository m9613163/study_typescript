// 불순 함수
// g라는 외부 변수를 사용하므로 불순 함수
let g = 10
function impure2(x: number) {return x + g}