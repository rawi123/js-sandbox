function flex(elem) {
    elem.style.display = "flex"
    elem.style.flexDirection = "column"
    elem.style.alignItems = "center"
    elem.style.justifyContent = "center"
}
const genLetter = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const letter = alphabet[Math.floor(Math.random() * alphabet.length)]
    return letter
}
const checkLetter = e => {
    
    if (!flag) {
        if (e.keyCode>=65&&e.keyCode<=90) {
            if (!arr.includes(e.key.toLowerCase())) {
                checkWin(e.key.toLowerCase())
                arr.push(e.key.toLowerCase())
            }
            else {
                changing.innerText = `${e.key.toLowerCase()} has alreday been selected`
            }
            logArr()
        }
        else{
            changing.innerText=`please enter a valid input`
        }

    }
}
const checkWin = key => {
    if (key === toGuess) {
        changing.innerText = "succes"
        changing.style.color = "green"
        flag = "true"
    }
    else {
        changing.innerText = "try again"
        changing.style.color = "red"
    }
}
const logArr = () => {
    keysGuessed.innerText = arr.join(",")
}
let flag = false
window.addEventListener("keydown", checkLetter)
flex(document.body)
const div = document.querySelector("div")
const keysGuessed = document.querySelector("#keysGuessed")
console.log(keysGuessed);
const changing = document.querySelector("#changing")
div.style.border = "2px solid black"
div.style.width = "3rem"
div.style.height = "3rem"
flex(div)
const p = document.createElement("p")
p.innerText = "?"
p.style.fontSize = "1.5rem"
div.appendChild(p)
const toGuess = genLetter();
const arr = []
console.log(toGuess, changing);