// const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// foods.sort();
// console.log(foods);
// // option to reverse the array!
// foods.sort((a, b) => b.localeCompare(a))
// console.log(foods);
// let foodsWithUpperCase = ["falafel","Sabich","hummus","pizza with extra pineapple","z"];
// foodsWithUpperCase=foodsWithUpperCase.map(val=>val.toLowerCase())
// foodsWithUpperCase.sort((a,b)=>a.localeCompare(b));  
// console.log(foodsWithUpperCase);
// foodsWithUpperCase.sort((a, b) => b.localeCompare(a))
// console.log(foodsWithUpperCase);
// const words = ["apple", "cupercalifragilisticexpialidocious","hi", "zoo","hei"];
// words.sort((a,b)=>b.length-a.length)
// console.log(words);
const foods = ["apple", "cupercalifragilisticexpialidocious","hi", "zoo","dood"];
console.log(foods);
for(let j=0;j<foods.length;j++){
    for(let i=0;i<foods.length-1;i++){
        if(foods[i][0]>foods[i+1][0]){
            let temp=foods[i];
            foods[i]=foods[i+1];
            foods[i+1]=temp
        }
    }
}
console.log(foods);