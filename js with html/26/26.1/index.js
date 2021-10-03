// console.log(this);//this refers to the window if it is in html because- the object executing the function refers to the nearest object that is window
//if its not to html its global bacuse its node
// const myObj = {
//     name: "Timmy",
//     greet: () => {
//         console.log(`Hello ${this.name}`);//this is undefined becuase it is arrow function fix it by using normal function not arrow
//     },//arrow functin always use this as the global/window
// };
// myObj.greet();
// const myFuncDec = function () {
//     console.log(this);//window because it have to object as a father /running it
// };
// myFuncDec()
// const myFuncArrow = () => {
//     console.log(this);//same as above
// };
// myFuncArrow();
document.querySelector(".element").addEventListener("click",() => {
    console.log(this);//because its arrow function it will point to the window to fix we can make a normal function
});
//use strict is used to linking this only in the boundary of its block / function