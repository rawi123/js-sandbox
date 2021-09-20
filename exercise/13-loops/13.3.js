const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives","Ice-cream"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];
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
console.log(compare(food,food1));