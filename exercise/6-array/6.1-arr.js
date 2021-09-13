let arr=[1,7,3,0,-5,7,3,9];
for(let i =0;i<arr.length;i++)
    console.log(arr[i]);

function arrLength(arr){
    let j=1;
    for (let i=0;i<j;i++){
        if(arr[i]===undefined)
            return i;
        j++;
    }
}
function sum(arr){
    let sum=0;
    for(let i =0;i<arr.length;i++)
        sum+=arr[i];
    return sum
}
function arrMulti(arr){
    let arrMulti=[];
    for(let i =0;i<arr.length;i++)
        arrMulti.push(arr[i]*2);
    return arrMulti;
}
console.log(`length is ${arrLength(arr)}`);
console.log(`sum is ${sum(arr)}`);
console.log(`arr multi is ${arrMulti(arr)}`);