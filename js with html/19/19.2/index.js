function flex(arr){
    for (i of arr){
        i.style.display="flex"
        i.style.flexDirection="column"
        i.style.justifyContent="center"
        i.style.alignItems="center"
    }    
}
document.body.innerHTML+=`<div class="container"> 
<p>Text To Copy</p>
<h5></h5>
</div>`
const div=document.querySelector(".container")
console.log(div);

div.children[0].style.margin=".5rem"
div.children[1].style.margin=".1rem"
div.style.fontSize="25px"
div.style.marginBottom="90px"
const genText=document.querySelector(".container h5")
let text;
genText.innerHTML=text=Math.floor(Math.random()*(999999-10000) +10000)
const field=document.createElement("div")
flex([div,document.body,field])
field.style.width="25vw"
field.style.height="30vh"
field.style.background="#e5e5e5"
field.style.borderRadius="20px"
field.style.border="3px solid blue"

document.body.appendChild(field)