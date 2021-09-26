const start=document.querySelector(".start-here")
console.log(start);
const ul=start.nextElementSibling.children[0]
const title2=ul.children[1]
title2.innerHTML="main"
const toAdd=document.createElement("li")
toAdd.innerText="sub title 4"
ul.appendChild(toAdd)
start.nextElementSibling.nextElementSibling.remove()
start.previousElementSibling.innerText="master of the dom"
start.parentElement.nextElementSibling.children[0].innerText="rawi"