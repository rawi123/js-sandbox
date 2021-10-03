// function storm() {//option
//     this.superPower="invisability"
// }
// let storm1=new storm()
// storm.prototype.prinPowers=function(){
//     this.print=printSuperPower
//     this.print()
// }
// console.log(storm1.prinPowers());

function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

const storm={//option 1
    superPower:"raining",
    func:printSuperPower
}
storm.func();
