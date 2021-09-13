let n=77;
function boom(number){
    for (let i=1;i<=number;i++){
        if(i%7!==0){console.log(i);}
        else
        {
            let mini=i.toString();
            if(mini.includes(7)){
                console.log("Boom Boom");
            }
            else{
                console.log("Boom");
            }
        }
    }
}
boom(n);