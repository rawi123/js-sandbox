Array.prototype.forFilter = func => {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        let val=arr[i]
        if (func(val))
            temp.push(val)
    }
    console.log(temp);
}
Array.prototype.forMap=(func=0)=>{
    for(let i=0;i<arr.length;i++)
        arr[i]=func(arr[i])
    console.log(arr);
}
const checkEven=val=>val%2===0
const double=val=>val*2
Array.prototype.forForEach=func=>{
    for(let i=0;i<arr.length;i++)
        func(arr[i])
}
let arr = [1, 2, 3, 4]
arr.forMap(double)
