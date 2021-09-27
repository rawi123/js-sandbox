document.body.style.display="flex"
document.body.style.flexDirection="column"
document.body.style.alignItems="center"
const submit=document.querySelector("#submit")
const email=document.querySelector("#email")
const personName=document.querySelector("#name")
const age=document.querySelector("#age")
const arr=[email,personName,age];
const form=document.querySelector("form")
const div=document.createElement("div")
document.body.appendChild(div)
const p=document.createElement("p")
p.innerText=`is this your final submition?
${personName.value}- name
${email.value} - email
${age.value}- age`
div.appendChild(p)
const finalSubmition=document.createElement("input")
finalSubmition.type="submit"
finalSubmition.value="yes!"
const change=document.createElement("input")
change.type="submit"
change.value="change!"
div.appendChild(change)
div.appendChild(finalSubmition)
div.style.display="none"
form.addEventListener("submit",ele=>{
    ele.preventDefault()
    if(div.style.display==="none")
        div.style.display="unset"
})
finalSubmition.addEventListener("click",e=>{
    p.innerText="congratulations you successfully sent this form"
    div.children[1].remove()
    div.children[1].remove()
    for (let i of arr){
        i.value=""
        i.disabled="true"
    }
})
change.addEventListener("click",e=>{
    div.style.display="none"
})