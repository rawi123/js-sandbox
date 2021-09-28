
const startTimer = () => {
    if (!flag) {

        a = setInterval(() => {
            totalMilSec++;
            milSecTimer = Math.floor(totalMilSec % 100)
            secTimer = Math.floor(totalMilSec / 100)
            minTimer = Math.floor(totalMilSec / 100 / 60)
            displayTime([[milSec, milSecTimer], [sec, secTimer], [min, minTimer]])
        }, 10);
        flag = true
        start.style.backgroundColor="white"
        // start.style.border="1px solid gray"
        // start.style.borderRadius="2px"
    }
}
const displayTime = arr => {
    for (let i of arr) {
        if (i[1] < 10) i[0].innerText = `0${i[1]}`
        else i[0].innerText = i[1]
    }
}
const stopTimer = () => {
    clearInterval(a)
    start.style.backgroundColor="#E5E5E5"
    flag = false;
}
const resetTimer = () => {
    start.style.backgroundColor="#E5E5E5"
    clearInterval(a)
    totalMilSec = 0;milSecTimer = 0;secTimer = 0;minTimer = 0
    displayTime([[milSec, milSecTimer], [sec, secTimer], [min, minTimer]])
}
let a;
const milSec = document.querySelector("#sec")
const sec = document.querySelector("#mins")
const min = document.querySelector("#hours")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")
let flag = false;
let totalMilSec = 0;
let milSecTimer = parseInt(milSec.innerText)
let secTimer = parseInt(sec.innerText)
let minTimer = parseInt(min.innerText)
start.addEventListener("click", startTimer)
stop.addEventListener("click", stopTimer)
reset.addEventListener("click", resetTimer)