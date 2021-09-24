//3.1
// let nb_year=(p0,percent,aug,p)=>{
//     let years=0;
//     while(p0<p){
//         p0+=p0*percent/100+aug
//         years++;
//     }
//     return years
// }
function nb_year1(p0, per, aug, p) {
    let years = 0;
    let i;
    for (i = 0; p0 < p; i++)
        p0 += p0 * per / 100 + aug
    return i
}
// console.log(nb_year1(1500000, 2.5, 10000, 2000000));


3.2
let peopleOnBus = arr => {
    let sum = 0
    for (let smallArr of arr)
        sum += smallArr[0] - smallArr[1]
    return sum
}
function peopleOnBus1(arr){
    return arr.reduce((temp,val)=>(temp+=val[0]-val[1]),0)
}
console.log(peopleOnBus1([[1,2],[3,2],[4,1]]));