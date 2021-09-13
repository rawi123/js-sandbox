let n=77;
function boom(number){
    for (let i=1;i<=number;i++){
        if(i%7===0)
        {
            let mini=i.toString();
            if(mini.includes(7)){
                console.log("Boom Boom");
            }
            else{
                console.log("Boom");
            }
        }
        else{console.log(i);}
    }
}
boom(n);