function nextBigger(n){
  let flag=true;
  let temp=n+1;
  console.log(temp.toString().split(""));
  while(flag){
    if(temp.toString().split("").filter(val=>n.toString().split("").indexOf(val)!==-1).length===n.toString().split("").length)
        return temp;
    temp+=1
  }
}
console.log(nextBigger(513));