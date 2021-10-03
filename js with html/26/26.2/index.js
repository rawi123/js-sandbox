const storm = {
    superPower:"invisability",
    func:printSuperPower
}
function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}
storm.func();