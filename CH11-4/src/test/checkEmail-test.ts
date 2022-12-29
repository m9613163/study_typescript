import { checkEmail } from "../checkEmail"

[
    { email: 'abc@efg.com' },
    { email: 'abcdefg' }
].forEach((target, index) => {
    const [value, failureReason] = checkEmail(target)
    if(failureReason)
        console.log(index, 'validation fail.', JSON.stringify(failureReason))
    else
        console.log(index, 'validation ok.', JSON.stringify(value))
})

// 실행 결과
/*
0 validation ok. {"email":"abc@efg.com"}
1 validation fail. ["invailid email address"]
*/