const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];
const ul=document.createElement("ol")
document.body.appendChild(ul)
users.forEach(val=>{
    const toAdd=document.createElement("li")
    toAdd.innerText=val.firstName+" "+ val.lastName
    toAdd.setAttribute("data-id",val.id)
    ul.appendChild(toAdd)
})
ul.style.listStyle="none"
const ul1=Array.from(ul.children)
ul1.forEach(el=>{
    console.log(el.dataset.id);
})