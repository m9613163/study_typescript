import { create } from "./create"

class Point { constructor(public x: number, public y: number) {} }
[
    create(Date),               // 2022-12-26T09:34:35.381Z
    create(Point, 0, 0)         // Point { x: 0, y: 0 }
].forEach(s => console.log(s))