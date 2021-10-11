const btns = [...document.querySelectorAll("button")],
    arr = ["rock", "papper", "scissors"],
    me = document.querySelector("#me"),
    tieText = document.querySelector("#tie"),
    com = document.querySelector("#com"),
    myPic = document.querySelector(".my-pic"),
    comPic = document.querySelector(".com-pic");

let myPick,
    comPick
btns.map(val => {
    val.addEventListener("click", play)
})


function play() {
    const apiChoice = arr[Math.floor(Math.random() * arr.length)]
    winLoseTie(this.innerText, apiChoice)
}


function winLoseTie(pick, apiChoice) {
    console.log(pick,apiChoice);
    if (pick === apiChoice) {
        tie()
    }
    else if (pick === "rock" && apiChoice === "papper" ||
        pick === "papper" && apiChoice === "scissors" ||
        pick === "scissors" && apiChoice === "rock" ) {
        lose()
    }
    else {
        win()
    }
    comPick = apiChoice === "rock" ? "./img/rock.png" : apiChoice === "papper" ? "./img/papper.jfif" : "./img/scisoors.png"
    myPick = pick === "rock" ? "./img/rock.png" : pick === "papper" ? "./img/papper.jfif" : "./img/scisoors.png"
    changeBackground()

}
function changeBackground() {
    myPic.style.background = `url(${myPick})no-repeat center center/cover`
    comPic.style.background = `url(${comPick})no-repeat center center/cover`
}
function win() {
    me.innerText = Number(me.innerText) + 1
}
function lose() {
    com.innerText = Number(com.innerText) + 1
}
function tie() {
    tieText.innerText = Number(tieText.innerText) + 1

}