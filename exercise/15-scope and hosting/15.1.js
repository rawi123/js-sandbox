// function funcA() {
//     console.log(a);//have to define a before logging it other wise we get undefined only - if there is no a deceleration we get error
//     console.log(foo());//2
//     var a = 1;
//     function foo() {
//         return 2;
//     }
// }
// funcA();

//
// var fullName = 'John Doe';
// var obj = {
//     fullName: 'Colin Ihrig',//full name in this scope is not changed and in obj set to colin ihrig
//     prop: {
//         fullName: 'Aurelio De Rosa',//full name in this scope of prop is auerlio but the var full name is not changed
//         getFullName: function () {
//             return this.fullName;//return auerlio
//         }
//     }
// };
// console.log(obj.prop.getFullName());//aurelio
// var test = obj.prop.getFullName;
// console.log(test());

//
// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;//a is scoped to func b while b is defined as any
// }
// funcB();//log nothing but return 1
// console.log(typeof a);//undefined
// console.log(typeof b);//1

//
// function funcC() {
//     console.log("1");
// }
// funcC();//string 2
// function funcC() {
//     console.log("2");
// }
// funcC();//string 2 because - the js hoist the fucntions by order



// function funcD1() {
//     d = 1;
// }
// funcD1();
// console.log(d);//1
// function funcD2() {
//     var e = 1;
// }
// funcD2();
// console.log(e);//error

//
// function funcE() {
//     console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f);//f is undefined
// var f = 1;
// funcE();//1