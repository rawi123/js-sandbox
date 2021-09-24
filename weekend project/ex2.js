//2.1
// let func = arr => {
//     arr = arr.sort((a, b) => a - b)
//     console.log(arr);
//     return arr[0] + arr[1]
// }
// function twoSmallest(arr) {
//     arr = arr.reduce((array, val) => (
//         val < array[0] ? (array[0] = val, array) : val < array[1] ? (array[1] = val, array) : array
//     ), [999999999, 999999999])
//     return arr[0] + arr[1]
// }
// console.log(twoSmallest([10, 3,7,12]));


// TODO 2.2

//2.3
// let nextSquare = num => (
//     Math.sqrt(num) % 1 === 0 ? (Math.sqrt(num) + 1) ** 2 : -1
// )
// function nextSquare2(num) {
//     let sqrt=Math.sqrt(num)
//     if (sqrt === parseInt(sqrt))
//         return Math.pow(sqrt + 1, 2)
//     else
//         return -1
// }
// console.log(nextSquare2(121));

//2.4 unique
// let unique=arr=>{
//     arr=arr.sort()
//     return arr[0]===arr[1]?arr[arr.length-1]:arr[0]
// }
// function unique2(array){
//     let num=array[0]
//     let num1=array[1]
//     for(let i=2;i<array.length;i++){
//         if(num===num1){
//             if(array[i]!==num)
//                 return array[i]
//         }
//         else return num===array[i]?num1:num
//     }
// }
// console.log(unique2([ 1, 1, 1, 1, 1, 1,9 ]));

//2.5summation
// let summationRekorsia = num => {
//     if (num === 1)
//         return num
//     return summation(num - 1) + num
// }
// function summation(num) {
//     let sum = 0
//     for (let i = 1; i <= num; i++)
//         sum += i
//     return sum
// }
// console.log(summation(2));

//2.6 years
// let centuries=years=>(Math.ceil(years/100))
// console.log(centuries(1705));

//2.7 basic math
let calculate=(symbol,num1,num2)=>(
    symbol==='+'?num1+num2:symbol==='-'?num1-num2:symbol==='*'?num1*num2:num1/num2
)
function calc(operator,num1,num2){// do not use! big security risk
    return eval(num1+operator+num2)
}
console.log(calc('+',1,2));