let arr=["boo", "doooo", "hoo","ro"];
let leng=arr=>{
    arr.forEach(i => {
        arr.splice(arr.indexOf(i),1,i.length);
    });
}
leng(arr);
console.log(arr);