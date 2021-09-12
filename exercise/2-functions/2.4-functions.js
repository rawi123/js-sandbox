let dat=new Date();
function tellDate(date){
    let month=["jan","feb","march","april","may","june","july","auguts","september","october","november","december"];
    let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return `today is ${weekday[date.getDay()]} the ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()} `;
}
console.log(tellDate(dat));