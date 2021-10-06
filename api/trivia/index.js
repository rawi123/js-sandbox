async function tryIt(){
    const fetched=await (await fetch("https://opentdb.com/api.php?amount=10")).json()
    results=fetched.results
    for (let i of results){
        console.log(i);
    }
}
tryIt()