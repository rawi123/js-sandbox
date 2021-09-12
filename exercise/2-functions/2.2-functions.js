function tellFortune(job,location,partnerName,numberOfChildren){
    return `you will be a ${job} in ${location} and married to ${partnerName} with ${numberOfChildren} children`;
}
let person=tellFortune("developer","microsoft","cilien","2");
console.log(person);