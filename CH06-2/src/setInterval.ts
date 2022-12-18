const period = 1000
let count = 0
console.log('origran started...')
const id = setInterval(() => {
    if(count >= 3) {
        clearInterval(id)
        console.log('program finished...')
    }
    else
        console.log(++count)
}, period)

// 실행 결과
// origran started...
// 1
// 2
// 3
// program finished...