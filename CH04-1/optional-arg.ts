//선택적 매개변수 ex
function fn(arg1: string, arg?: number) {console.log(`arg: ${arg}`)}

fn('hello', 1)  // arg: 1
fn('hello')     // arg: undefined
