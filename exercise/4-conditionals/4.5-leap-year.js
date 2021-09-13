let leapYear=year=>{
    if(year%4===0){
        if(year%100===0){
            return year%400===0;
        }
        return true;
    }
    return false;
}
let printLeap=boolean=>{
    if (boolean){
        console.log("It is indeed a leap year");
    }
    else console.log("This is not a leap year.");
}
printLeap(leapYear(2012));
printLeap(leapYear(2100));
printLeap(leapYear(2400));