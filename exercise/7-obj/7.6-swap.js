function keySwap(obj){
    for(let key in obj){
        obj[obj[key]]=key;
        delete(obj[key])
    }
    console.log(obj);
}
let object={
    name:"rawi",
    last:"lahiany"
}
keySwap(object)