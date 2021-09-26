const text = document.querySelector("#text")
text.style.fontSize = "30px"
const inc = document.querySelector("#increase")
const dec = document.querySelector("#decrease")
inc.onclick = () => {
    size = parseInt(text.style.fontSize);
    if (size < 100)
        text.style.fontSize = (size + 10) + "px"
    console.log(size);
    if (size > 100)
        text.style.fontSize = "100px"
    console.log(size,text.style.fontSize);
}
dec.addEventListener("click", () => {
    size = parseInt(text.style.fontSize);
    if (size >= 11)
        text.style.fontSize = (size - 5) + "px"
    if (size < 6) text.style.fontSize = "6px"
});