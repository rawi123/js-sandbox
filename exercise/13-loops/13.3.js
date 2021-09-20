const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];
const compare3=(arr1,arr2)=>{//wont remove duplicates!
    arr=arr1.filter((val,i)=>{
        let temp=arr2.filter(val1=>val===val1)
        return temp.length
    })
    return arr
}
const compare=(arr1,arr2)=>{
    let arr=[]
    for (let i=0;i<arr1.length;i++)
        for (let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                if(!arr.includes(arr1[i]))
                    arr.push(arr1[i])
                break
            }
        }
    return arr
}
const compare1=(arr1,arr2)=>{
    let arr=[]
    for (let first of arr1){
        for(let second of arr2){
            if(first===second)
            {       if(!arr.includes(second))
                        arr.push(second)
                    break
            }
        }
    }
    return arr
}
const compare2=(arr1,arr2)=>{
    arr=arr1.reduce((temp,val)=>{
        let temp1=arr2.filter(val1=>val1===val&&!temp.includes(val1))
        return temp1.length?temp.concat(temp1[0]):temp
    },[])
    return arr
}

console.log(compare3(food,food1));