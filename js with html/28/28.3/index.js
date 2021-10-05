const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];
function printName() {
    console.log(`my name is ${this.name}`);
}
function printHeroes(heroes, printFunc) {
    heroes.map(val=>{
        printFunc.call(val)
    })
}
printHeroes(superHeroes,printName)
// const f=new Function('name=rawi',"console.log(name)");
// f("rawi");