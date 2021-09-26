//header
const header=document.createElement("header")
header.width="100vw"
header.style.height="10vh"
header.style.backgroundColor="purple"
header.style.border="3px solid black"
header.style.borderRadius="20px"
console.log(header);
document.querySelector("body").appendChild(header)

const ul=document.createElement("ul")
header.appendChild(ul)
ul.style.display="flex"
ul.style.justifyContent="center"
ul.style.alignItems="center"
ul.style.listStyle="none"
const arr=["home","about","contact us"]
const arrLink=["https://rawi-protfolio.netlify.app/","https://rawi-protfolio.netlify.app/about.html","https://rawi-protfolio.netlify.app/contact.html"]
for (let i=0;i<arr.length;i++){
    const li=document.createElement("li")
    const link=document.createElement("a")
    li.appendChild(link)
    link.innerText=arr[i]
    link.href = arrLink[i];
    link.style.color="blue"
    link.target="_blank"
    link.addEventListener("mouseover",()=>{link.style.color="black"})
    link.addEventListener("mouseout",()=>{link.style.color="blue"})
    link.style.transition="all 0.2s"
    link.style.textDecoration="none"
    // li.innerHTML=arr[i]
    li.style.marginRight="4rem"
    link.style.fontSize="2rem"
    ul.appendChild(li)
    ul.appendChild(link)
}




//body
const container=document.createElement("div")
container.style.display="flex"
container.style.justifyContent="center"
container.style.alignItems="center"
//div
document.querySelector("body").appendChild(container)
//a
const a=document.createElement("img")
a.src="./1200px-SNice.svg.png"
a.width="200"
//p
const p=document.createElement("p")
p.style.fontSize="20px"
p.innerHTML="this is a demo web"
//append and margin
container.appendChild(a)
container.appendChild(p)
container.children[0].style.margin="2rem"
