function a(a,b){
    console.log(a,b," ab");
    a=a.replace(/^0+/, '');b=b.replace(/^0+/, '')
    console.log(a,b," ab");
    let aLen=a.length, bLen=b.length
    console.log(!a);
    let longArray=aLen>bLen ? a.split("").reverse() : aLen===bLen ? a.split("").reverse():b.split("").reverse();;
    let shortArray=aLen<bLen ?  a.split("").reverse():aLen===bLen ? b.split("").reverse():b.split("").reverse() ;
    longArray=longArray.map(val => parseInt(val));
    shortArray=shortArray.map(val => parseInt(val));
    console.log(shortArray,longArray," ha ");

    for(let i=0;i<shortArray.length;i++){
        let sum=shortArray[i]+longArray[i];
        if(sum>=10){
            shortArray[i]=sum%10;
            longArray[i+1]=longArray[i+1] ?longArray[i+1]+1:1;
        }
        else{
            shortArray[i]=sum;
        }
    }
    console.log(shortArray,longArray," first ");
    longArray=longArray.slice(shortArray.length);
    console.log(shortArray,longArray," second ");
    shortArray=shortArray.concat(longArray).reverse().join("");
    console.log(shortArray,longArray," third ");

}
a("","008100824045303269669937");