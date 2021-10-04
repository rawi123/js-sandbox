const hero = {
    health: 5,
    power: 68,
    getStrength: function () {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    }
}
function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}
console.log(whoIsStronger(hero.getStrength.bind(hero)));//the roblem is that hero get strength was accessed without any object so it returns the function only 
//and this wont be pointing to hero so using bing this function now refers to hero as its object - so this will refer to hero