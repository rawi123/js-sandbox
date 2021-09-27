const submit=document.querySelector('input[type=submit]')
const text=document.querySelector('input[type=text]')
console.log(submit);
const div=document.querySelector("div")
submit.addEventListener('click',()=>{
    
    if(div.children[div.children.length-1].tagName==="P");
        div.lastChild.remove()
    if(parseInt(text.value)>18)
        create("good")
    else if(parseInt(text.value)==text.value)
        create("no")

})
function create(str){
    const create=document.createElement("p")
    if(str==="good"){
        create.innerText="you can drink"
    }
    else
        create.innerText="you cant drink"
    div.appendChild(create)
}