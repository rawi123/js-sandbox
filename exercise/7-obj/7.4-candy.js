const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}
function getCandy(candyStore, id) {
    let result;
    candyStore.candies.forEach(val => {
        if (val.id === id) {
            result=val;
        }
    })
    return result
}
function getPrice(candyStore, id){
    return getCandy(candyStore,id).price;
}
function addCandy(candyStore, id, name, price){
    candyStore.candies.push({name:name,id:id,price:price,amount:1});
}
function buy(candyStore,id){
    let toBuy=getCandy(candyStore,id);
    console.log(toBuy,"tobuy");
    if(toBuy.amount>0)
    {
        candyStore.cashRegister+=toBuy.price;
        toBuy.amount-=1
    }
}
console.log(getPrice(candyStore,"as12f"));
addCandy(candyStore,"123","kinder",2)
console.log(candyStore);
buy(candyStore,"123");
console.log(candyStore)