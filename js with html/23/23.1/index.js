function func(){
    today = new Date();
     calchours = today.getHours();
     calcminutes = today.getMinutes();
     calcseconds = today.getSeconds();

    if (calchours < 10)
        hours.innerText = `0${calchours}`;
    else
        hours.innerText = `${calchours}`;
    if (calcminutes < 10)
        minutes.innerText = `0${calcminutes}`;
    else
        minutes.innerText = `${calcminutes}`;
    if (calcseconds < 10)
        seconds.innerText = `0${calcseconds}`;
    else
        seconds.innerText = `${calcseconds}`;
}


const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let today = new Date();
let calchours = today.getHours();
let calcminutes = today.getMinutes();
let calcseconds = today.getSeconds();
func();
setInterval(() => {
     func()
}, 500);
