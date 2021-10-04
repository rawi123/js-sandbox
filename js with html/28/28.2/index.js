const obj = {
    name: "rawi",
    printName: function () {
        console.log(`my name is ${this.name}`);
    },
}
const obj2={
    name:"samer"
}
// const printNameAfterSecond=()=>{
//     new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove(obj.printName.call(obj2))
//         }, 1000);
//     })//removed then because of the function print name actually logs it so when it reolves it calls the function
//     .catch((err)=>{
//         console.log("error occured");
//     })
// }
const printNameAfterSecond=()=>{
    new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(obj.printName.bind(obj2))
        }, 1000);
    }).then((res)=>{
        res()
    })
    .catch((err)=>{
        console.log("error occured");
    })
}
printNameAfterSecond()
//   let obj={
//       name:"Rawi",
//       async(cb){
//           cb();
//       },
//       parse(){
//         console.log(`${this.name} parse called`);
//       },
//       render(){
//           this.async(function(){
//               this.parse()
//           }.bind(this))
//       }
//   }
// obj.render()