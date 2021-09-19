let obj={
    name:"rawi"
}
let obj1={
    name:"samer"
}
let obj2={
    name:"naief"
}
let m=new Map();
m.set(obj,{id:201})
m.set(obj1,{id:421})
m.set(obj2,{id:641})
for (let [key,val] of m){
    console.log(`${key.name} : ${val.id}`);
}
