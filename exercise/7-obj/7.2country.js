let mycounter={
    country:'israel',
    capital:'jerusalem',
    language:'hebrew',
    population:'7 millions',
    neighbours:[]
}
mycounter.describe=function(){
    console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, they
        have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}` )
}
mycounter.describe();

mycounter.chekcIslan=function(){
    console.log("ASdasd");
    this.isIslan=this.neighbours.length===0 ? true :false;
}
mycounter.chekcIslan();
console.log(mycounter.isIslan);