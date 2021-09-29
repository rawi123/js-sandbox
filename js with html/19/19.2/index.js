function flex(arr) {
    for (i of arr) {
        i.style.display = "flex"
        i.style.flexDirection = "column"
        i.style.justifyContent = "center"
        i.style.alignItems = "center"
    }
}
function styleField(func = "") {
    if (func === "") {
        field.style.width = "20vw"
        field.style.height = "25vh"
        field.style.background = "#e5e5e5"
        field.style.borderRadius = "20px"
        field.style.border = "3px solid blue"
        document.body.appendChild(field)
        field.style.display = "flex"
        field.style.flexDirection = "column"
        field.style.alignItems = "center"
        field.style.justifyContent = "center"
    }
    else {
        func(field)
    }
}

function styleDivChilren() {
    div.children[0].style.margin = ".5rem"
    div.children[1].style.margin = ".1rem"
    div.style.fontSize = "25px"
    div.style.marginBottom = "90px"
}
function createInput() {
    field.appendChild(document.createElement("div"))
    for (let i = 0; i < 6; i++) {
        let create = document.createElement("input")
        create.type = "text"
        create.style.width = "1.7vw"
        create.style.height = "1.7vw"
        create.style.margin = ".3rem"
        create.style.fontSize = "1.2rem"
        create.maxLength = 1
        create.addEventListener("keyup", writing)
        create.addEventListener("keydown", goBack)
        create.addEventListener("focus", remove)
        create.addEventListener("paste",pasteIt)
        field.firstChild.appendChild(create)
    }
}

function pasteIt(e){
    // e.preventDefault();
    let text = e.clipboardData.getData('text');
    text=text.split("")
    applyPaste(this,text)
}
function applyPaste(element,text,i=0){
    element.focus()
    if(i===text.length)
        return
    element.value=text[i]
    if(element.nextElementSibling)
        setTimeout(() => {
            applyPaste(element.nextElementSibling,text,i+1)
        }, 50);
        setTimeout(function () {
            check6TypeRight();
          },400);
}
function writing(ele) {
    if (this.nextElementSibling) {
        if (this.value.length >= 1){
           
            this.nextElementSibling.focus()}
    }
    else if (ele.key !== "Backspace") {
        check6TypeRight()
    }
}
function goBack(ele) {
    if (this.value.length === 0 && ele.key === "Backspace") {
        if (this.previousElementSibling)
            this.previousElementSibling.focus()
    }
}
function check6TypeRight(){
    let arr = Array.from(field.children[0].children)
    let check = arr.filter(val => val.value.length === 1 && val.value == parseInt(val.value))
    if (check.length === 6) {
        let str = arr.map(val => val = val.value).join("")
        if (parseInt(str) === text) {
            display("won")
            arr.map(val => val.value = "")
        }
    }
}
function checkWin() {
    let arr = Array.from(field.children[0].children)
    let check = arr.filter(val => val.value.length === 1 && val.value == parseInt(val.value))
    if (check.length === 6) {
        let str = arr.map(val => val = val.value).join("")
        if (parseInt(str) === text) {
            display("won")
            arr.map(val => val.value = "")
        }
        else display("lost")
    }
    else display("lost")
    arr.map(val => val.value = "")
}

function remove() {
    if (field.lastChild.tagName === "P")
        field.lastChild.remove()
}
function flexRow(el) {
    el.style.flexDirection = "row"
}
const createBtn = () => {
    const btn = document.createElement("input")
    btn.type = "submit"
    btn.value = "verify"
    btn.style.marginTop = "4vh"
    btn.style.width = "3.4vw"
    btn.style.height = "3vh"
    btn.style.textAlign = "center"
    btn.style.cursor = "pointer"
    field.appendChild(btn)
    btn.style.backgroundColor = "black"
    btn.style.color = "white"
    btn.addEventListener('click', () => {
        if (field.lastChild.tagName !== "P") {
            checkWin()
        }
        else if (field.lastChild.innerText === "Veryfied") {
            field.lastChild.remove()
            display()
        }
    })
}
function display(text) {
    let display = document.createElement("p")
    switch (text) {
        case "won":
            display.innerText = "Veryfied"
            display.style.color = "green"
            field.firstChild.firstChild.focus()
            break;
        default:
            display.innerText = "try again!"
            display.style.color = "red"
    }
    field.appendChild(display)
}
document.body.innerHTML += `<div class="container"> 
<p>Text To Copy</p>
<h5></h5>
</div>`
const div = document.querySelector(".container")

styleDivChilren()
const genText = document.querySelector(".container h5")
let text;
//the right text
genText.innerHTML = text = Math.floor(Math.random() * (999999 - 100000) + 100000)
const field = document.createElement("div")
styleField()
flex([div, document.body])
createInput()
createBtn()