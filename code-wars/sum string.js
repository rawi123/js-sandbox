function a(a,b){
    a=a.replace(/^0+/, '');b=b.replace(/^0+/, '')
    let aLen=a.length, bLen=b.length
    let longArray=aLen>bLen ? a.split("").reverse() : aLen===bLen ? a.split("").reverse():b.split("").reverse();;
    let shortArray=aLen<bLen ?  a.split("").reverse():aLen===bLen ? b.split("").reverse():b.split("").reverse() ;
    longArray=longArray.map(val => parseInt(val));
    shortArray=shortArray.map(val => parseInt(val));

    for(let i=0;i<shortArray.length;i++){
        let sum=shortArray[i]+longArray[i];
        if(sum>=10){
            shortArray[i]=sum%10;
            longArray[i+1]=longArray[i+1] ?longArray[i+1]+1:1;
            if(longArray[i+1]>=10){
                longArray[i+1]%=10;
                longArray[i+2]+=longArray[i+1]/10
            }
        }
        else{
            shortArray[i]=sum;
        }
    }
    console.log(shortArray);
    console.log(longArray);
    longArray=longArray.slice(shortArray.length);
    shortArray=shortArray.concat(longArray).reverse().join("");
    return(shortArray)

}
console.log("901002328220491911630239667963".length);
console.log("91002328220491911630239667963".length);
a("63829983432984289347293874","90938498237058927340892374089");