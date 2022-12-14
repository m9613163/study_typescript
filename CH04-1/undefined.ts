interface INameable {
	name: string
}
function getName(o: INameable) {
    return o != undefined ? o.name : 'unknown name'
}

//let n = getName(undefined)            오류 발생
console.log(n)                          // unknown name
console.log(getName({name: 'Jack'}))    // Jack