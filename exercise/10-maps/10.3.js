const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ];
// const names=arr=>arr.map(val=>val.name)
// console.log(names(data));
// const before1990=arr=>arr.filter(val=>val.birthday.split("-").slice(-1)<1990)

// console.log("before 1990 ",before1990(data));

let foods=arr=>{
    finalobj=arr.reduce((obj,val)=>{
        let temp=val.favoriteFoods
        for (let foodArr in temp){
            temp[foodArr].forEach(foodName => {
                obj[foodName]=(obj[foodName]||0)+1
            });
        }
        return obj
    },{})
    return finalobj
}
let foodsShort=arr=>{
    finalobj=arr.reduce((obj,val)=>{
        let temp=val.favoriteFoods
        for (let foodArr in temp){
            temp[foodArr].forEach(foodName => {
                obj[foodName]=(obj[foodName]||0)+1
            });
        }
        return obj
    },{})
    return finalobj
}
console.log(foods(data));