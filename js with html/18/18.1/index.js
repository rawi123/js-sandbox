const submit=document.querySelector("#submit")
const input=document.querySelector("#input")
const toAdd=document.querySelector("div")
function addSmiley(){
    let number=input.value
    if(parseInt(number)==number){
        toAdd.innerHTML=""
        input.value=""
        for (let i=1;i<=number;i++)
        {
            const img1=document.createElement("img")
            img1.src="./1200px-SNice.svg.png"
            img1.width="200"
            toAdd.appendChild(img1)
        }
    }
    else{
        input.value="have to be a NUMBER!"
        input.style.color="red"
    }
}
function clear(){
    if(input.value==="have to be a NUMBER!"){
        input.value=""
        input.style.color="black"
    }
}
input.addEventListener("click",clear)
submit.addEventListener("click",addSmiley)
input.addEventListener("keyup",(e)=>{
    if(e.key==="Enter")
        addSmiley()
})