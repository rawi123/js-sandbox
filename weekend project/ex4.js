
// let feb = n => {
//     let arr = []
//     for (let i = 0; i <= n; i++)
//         arr[i] = i===0?0:(arr[i - 2] + arr[i - 1]) || 1
//     return arr[n]
// }

// function febRekorsia(num) {
//     if(num<2){
//         return 1
//     }
//     return febRekorsia(num-1)+febRekorsia(num-2)
// }

// console.log(febRekorsia(11));
// for(let i=0;i<12;i++)
//     console.log(febRekorsia(i));

//4.2
// let trib = num => {
//     let arr = []
//     for (let i = 0; i <= num; i++)
//         arr[i] = (arr[i - 2] + arr[i - 1] + arr[i - 3]) || 1
//     return arr
// }
// console.log(trib(10));
// function tribRekorsia(num) {
//     if(num<2){
//         return 1
//     }
//     return tribRekorsia(num-1)+tribRekorsia(num-2)+tribRekorsia(num-3)
// }
// console.log(tribRekorsia(5));
