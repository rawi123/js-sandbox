// function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
//     this.name = pokemonName;
//     this.type = pokemonType;
//     this.attackList = pokemonAttackList;
// }
// Pokemon.prototype.callPokemon=function(){
//     console.log(`I choose you, ${this.name}`);
// }
// Pokemon.prototype.attack=function(number=0){
//     console.log(`${this.name} used ${this.attackList[number]}`);
// }
// const pikachu=new Pokemon("pikachu","electric",["thunder","punch","tail electricity","light"])
// const Charizard=new Pokemon("Charizard","fire",["fire spit","tail attack","storm"])
// pikachu.callPokemon()
// Charizard.callPokemon()
// pikachu.attack(Math.floor(Math.random()*pikachu.attackList.length))
// Charizard.attack(Math.floor(Math.random()*Charizard.attackList.length))
class Pokemon {
    constructor(pokemonName, pokemonType, pokemonAttackList) {
        this.name = pokemonName;
        this.type = pokemonType;
        this.attackList = pokemonAttackList;
    }
    callPokemon() {
        console.log(`I choose you, ${this.name}`);
    }
    attack(number = 0) {
        console.log(`${this.name} used ${this.attackList[number]}`);
    }
}
const pikachu=new Pokemon("pikachu","electric",["thunder","punch","tail electricity","light"])
const Charizard=new Pokemon("Charizard","fire",["fire spit","tail attack","storm"])
pikachu.callPokemon()
Charizard.callPokemon()
pikachu.attack(Math.floor(Math.random()*pikachu.attackList.length))
Charizard.attack(Math.floor(Math.random()*Charizard.attackList.length))
