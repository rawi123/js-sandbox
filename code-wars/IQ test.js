function iqTest(numbers){
    let n=numbers.split(" ");
    let arr=n.filter(val => val%2===0);
    let num=n.filter(val =>val%2!==0);
    console.log(n);
    return (arr.length>num.length ? n.indexOf(num[0])+1:n.indexOf(arr[0])+1)
}
console.log(iqTest("2 4 8 10 12 7"));