const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
   ];
listOfNeighbours.forEach(arr=>{
    arr.forEach(country=>{
        console.log(`Neighbour: ${country}`);
    })
})
