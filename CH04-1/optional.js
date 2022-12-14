function getAge(o) {
    return o != undefined && o.age ? o.age : 0;
}
console.log(getAge(undefined));
console.log(getAge(null));
console.log(getAge({ age: 32 }));
