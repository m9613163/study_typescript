function getName(o) {
    return o != undefined ? o.name : 'unkown name';
}
var n = getName(undefined); // 오류 발생
console.log(n);
console.log(getName({ name: 'Jack' }));
