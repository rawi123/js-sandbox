const submit = document.querySelector("input[type='submit']")
const div = document.querySelector("div")
console.log(div);
const relevantText = document.createElement('h4')
relevantText.innerText = "100 letters minimun"
relevantText.style.color = "red"
console.log(div.children);
// div.appendChild(relevantText)
const text = document.querySelector("#jobApplication")
submit.onclick = () => {
    if (text.value.length < 100) {
        if (div.children.length === 1) {
            div.appendChild(relevantText)
        }
    }
}
text.addEventListener("click", () => {
    if (div.children.length > 1) {

        div.removeChild(relevantText)
    }
});