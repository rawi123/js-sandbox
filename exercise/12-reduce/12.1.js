let arr=[10,12,13,15]
console.log(arr.reduce((temp,val)=>(Math.max(temp,val)),0));
console.log(arr.reduce((sum,val)=>(val%2===0?sum+val:sum),0));
console.log(arr.reduce((avg,val)=>(avg+val),0)/arr.length);