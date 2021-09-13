let arr=[5,-1,1,7,-1,5];
let bestAvgJump=arr=>{
    let temp=[]
    let sum=0;
    let counter=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===-1){
            counter+=1;
        }
        else sum+=arr[i];
        if((i+1)%3===0){
            temp.push(sum/(3-counter));
            sum=0,counter=0;
        }
    }
    return temp;
}
// this also works for the best jump just send the right arr
let bestAvg=arr=>{
    let max=0;
    arr.forEach(i => {
        max=Math.max(max,i);
    });
    return max;
}
arrAvg=bestAvgJump(arr);
console.log(arrAvg);
console.log(bestAvg(arrAvg));
console.log(bestAvg(arr));