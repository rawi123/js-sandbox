// const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// foods.sort();
// console.log(foods);
// // option to reverse the array!
// foods.sort((a, b) => b.localeCompare(a))
// console.log(foods);
// let foodsWithUpperCase = ["falafel","Sabich","hummus","pizza with extra pineapple"];
// foodsWithUpperCase=foodsWithUpperCase.map(val=>val.toLowerCase())
// foodsWithUpperCase.sort();
// console.log(foodsWithUpperCase);
// foodsWithUpperCase.sort((a, b) => b.localeCompare(a))
// console.log(foodsWithUpperCase);

const words = ["apple", "supercalifragilisticexpialidocious","hi", "zoo"];
words.sort((a,b)=>b.length-a.length)
console.log(words);