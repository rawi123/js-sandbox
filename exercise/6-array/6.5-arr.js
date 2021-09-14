// const arr=[];
// arr.length=100;
// arr.fill({name:"hi"},0,100);
// console.log(arr);

// let temp=[];
// temp.length=100
// let a=Array.from(temp.keys());
// console.log(a);

// let ob={
//     name:"rawi",
//     asdasd:123123,
//     aa:"aasd"
// }
// let array1=[];
// for (let val in ob){
//     array1.push(ob[val]);
// }
// console.log(array1);

let arr100=[1,212,3];
let ob1={};
let i=0;
arr100.forEach(val => {
    ob1[i]=val;
    i++
});
console.log(ob1);
console.log(Array.isArray(arr100));
const temp=[];
arr100.forEach(val=>{
    temp.push(val);
})
console.log(temp);
temp[1]=0;
console.log(temp);
console.log(arr100);

