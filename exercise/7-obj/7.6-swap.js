function keySwap(obj){
    for(let key in obj){
        let temp=key;
        key=obj[key];
        obj[key]=temp;
        delete(obj[temp])
    }
    console.log(obj);
}
let object={
    name:"rawi",
    last:"lahiany"
}
console.log(object);
keySwap(object)