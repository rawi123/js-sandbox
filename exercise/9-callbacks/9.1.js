function isString(str1,call){
    if(typeof(str1)==="string")
        call(str1)
}
function hehe(str){
    console.log(str);
}
// isString("rawi",hehe)

const upper=(str,cbfunction)=>{
    str=(str.split(" ")[0].toUpperCase())+" "+(str.split(" ").slice(1).join(" "))
    console.log(cbfunction(str));
}
const cb=str=>str.split(" ").join("-");
upper("rawi is the best in this course for sure",cb)



const mine=(arr,func)=>{func(arr.split(" ").join("||"))}
const func=str=>{console.log(str)}
mine("hello its us",func)