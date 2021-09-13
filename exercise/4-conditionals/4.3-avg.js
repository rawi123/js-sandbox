let jhon=[89,120,103];
let mike=[116,94,123];
let avg=arr=>{
    let sum=0;
    for (let i=0;i<arr.length;i++){sum+=arr[i];}
    return(sum/arr.length);
}
let winner=(avg1,avg2)=>{
    if(avg1>avg2){return "jhon team won";}
    else if (avg2>avg1){return "mike team won";}
    else return "draw";
}
let jhonavg=avg(jhon);
let mikeavg=avg(mike);
console.log(winner(jhonavg,mikeavg));
