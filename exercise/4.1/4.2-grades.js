let score=grade=>{
    if(grade<=0){
        return "WRONG GRADE";
    }
    if(0>=grade>=64){
        return "F";
    }
    if(grade<=69){
        return "D";
    }
    if(grade<=79){
        return "C";
    }
    if(grade<=89)
    {
        return "B";
    }
    else if(90<=grade && grade<=100){
        return "A";
    }
    else{return "bonus"}
}
let gr1=score(60);
console.log(gr1);