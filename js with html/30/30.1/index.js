const relationTo10=(number)=>{
    return new Promise((resolve,reject)=>{
        number>10?resolve():reject()
    })
}
relationTo10(110).then(()=>{
    console.log("bigger than 10");
}).catch(()=>{
    console.log("not bigger");
})