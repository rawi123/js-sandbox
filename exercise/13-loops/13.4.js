const func=n=>{
    let temp=["#"]
    for (let i=1;i<=n;i++){
        let space=''
        for(let j=1;j<=n-i;j++)
            space+="s"
        console.log(`${temp.join("")}${space}`);
        temp.push("#")
    }
}
func(5)