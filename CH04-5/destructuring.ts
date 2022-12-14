// 비구조화 할당문 사용 ex
export type Person = {name: string, age: number}

const printPerson = ({name, age}: Person): void =>
        console.log(`name: ${name}, age: ${age}`)
    
printPerson({name: 'Jack', age: 10})    // name: Jack, age: 10