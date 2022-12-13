let part1 = {name: 'Jane'}, part2 = {age: 32}, part3 = {city: 'Seoul', country: 'kr'};
let merged = {...part1, ...part2, ...part3}
console.log(merged)

//실행결과
//{ name: 'Jane', age: 32, city: 'Seoul', country: 'kr' }