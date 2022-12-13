abstract class AbstratPerson5 {
    abstract name: string
    constructor(public age?: number) {}
}

export default class Person5 extends AbstratPerson5 {
    constructor(public name: string, age?: number) {
        super(age)
    }
}
let jack5 : Person5 = new Person5('Jack', 32)
console.log(jack5) // Person5 = { age: 32, name: 'Jack' }