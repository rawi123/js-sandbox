// const doubleValues=array=>(array.map(val=>val*2))
let a=[1,2,3,4]
// const onlyEven=array=>array.filter(val=>val%2===0)
// console.log(doubleValues(a));
// console.log(onlyEven(a));
a=["a","b","c","d","A","o","Y"]
// const showFirstAndLast=arr=>arr.filter((val,idx)=>idx===0||idx===arr.length-1)
// console.log(showFirstAndLast(a));
// let obj={};
// a.forEach(val=>{
//     val=val.toLowerCase()
//     if(/[aieouy]/.test(val))
//         obj[val]=(obj[val]||0)+1
// })
// console.log(obj);
// a=a.join().toLowerCase().split(",");
// let obj1=a.reduce((obj,val)=>/[aieouy]/.test(val)?(obj[val]=(obj[val]||0)+1,obj):obj,{})
// console.log(obj1);
const cap=str=>str.toUpperCase()
// console.log(cap("rawi"));
// const shiftLetters=str=>str.split("").map(val=>String.fromCharCode(val.charCodeAt()-1)).join("")
// console.log(shiftLetters("rbwi"));
const swapCase=str=>str.split(" ").map((val,idx)=>idx%2===1?cap(val):val).join(" ")
console.log(swapCase("i am the best dev in this course for sure"));