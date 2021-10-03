// function Square(a, b, c, d) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.d = d;

// }
// Square.prototype.equal=function(square){
//     return this.a===square.a&&this.b===square.b&&this.c==square.c&&this.d===square.d
// }


class Square{
    constructor(a, b, c, d){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    equal(square){
        return this.a===square.a&&this.b===square.b&&this.c==square.c&&this.d===square.d
    }
}
const square1=new Square(1,2,3,4)
// console.log(square1);
console.log(square1.equal(new Square(1,2,3,4)));