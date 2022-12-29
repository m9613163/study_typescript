import { checkPassword } from "../checkPassword"

[
    {password: '123456'},
    {password: '1234'},
    {},
    {pa: '1233456'}
]
    .forEach((target, index) => {
        const [value, failureReason] = checkPassword(target)
        if(failureReason)
            console.log(index, 'validation fail.', JSON.stringify(failureReason))
        else   
            console.log(index, 'validation ok.', JSON.stringify(value))
    })

// 실행 결과
/*
0 validation ok. {"password":"123456"}
1 validation fail. ["Password must have more then 6 characters"]
2 validation fail. ["Password can not be null","Password must have more then 6 characters"]
3 validation fail. ["Password can not be null","Password must have more then 6 characters"]
*/