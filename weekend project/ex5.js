// let removeChars=str=>{
//     console.log(str.slice(1,(str.length-1)));
// }
// function usingfilter(str){
//    console.log( str.split("").filter((val,index)=>index!==0&&index!=str.length-1).join(""));
// }
// const usingReduce=str=>{
//     console.log(str.split("").reduce((string,val,idx)=>{
//         return idx===0||idx===str.length-1?string:(string+=val,string)
//     },""));
// }
// usingReduce("rawiasd")

//5.2
// const repeatStr=(str,num)=>(str.repeat(num))
// const repeatStr1=(str,num)=>{
//     let temp=str
//     for (let i=0;i<num;i++)
//         str+=temp
//     return str
// }
// console.log(repeatStr1("r",8));

//5.3
// const toCamelCase=str=>(str.replace(/-[a-zA-Z]/g,val=>"_"+val[1].toUpperCase()))
// const toCamelCase1=str=>{
//     str=str.split("-")
//     return str.map((val,i)=>i!==0?val[0].toUpperCase()+val.slice(1):val).join("_")
// }
// const toCamelCase2=str=>{
//     str=str.split("")
//     str=str.reduce((string,val,i)=>{
//         return val==="-"?(string+="_",str[i+1]=str[i+1].toUpperCase(),string):(string+=val,string)
//     },"")
//     return str
// }
// console.log(toCamelCase2("the-stealth-warrior"));


//5.4
const toWeirdCase = string => (string.split("").map((val, i) => i % 2 === 1 ? val.toLowerCase() : val.toUpperCase()).join(""))
const toWeirdCase1 = string => {
    string = string.split("")
    for (let i = 0; i < string.length; i += 2) {
        string[i] = string[i].toUpperCase()
        string[i + 1] ? string[i + 1] = string[i + 1].toLowerCase() : 1
    }
    return string.join("")
}
console.log(toWeirdCase1("Weird string case"));