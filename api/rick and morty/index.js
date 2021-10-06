let characters = [],
    waitQuote = document.querySelector(".quote"),
    next;
const spinner = document.querySelector(".spinner-container"),
    spinnerQuote = spinner.querySelector(".quote"),
    body = document.querySelector("body"),
    grid = document.querySelector(".grid");

async function gen(firstTime = true) {
    characters = []
    try {
        let charList,
            quote = await quoteGen()

        waitQuote.innerText = quote.data[0]

        window.removeEventListener("scroll", checkBottom)

        if (!firstTime) {
            body.append(spinner)
            spinnerQuote.scrollIntoView({ behavior: "smooth", block: "end" });
            charList = await (await fetch(next)).json();
            await wait(2)
        }
        else {
            charList = await (await fetch("https://rickandmortyapi.com/api/character/")).json()
            await wait(2)
        }

        next = charList.info.next
        for (let j of charList.results) {
            characters.push(j)
        }
    }
    finally {
        spinner.remove()
        for (let i in characters) {
            await createPost(characters[i])
        }
        window.addEventListener("scroll", checkBottom)
    }
}

const quoteGen = async () => {
    let randomP = Math.floor(Math.random() * 1 + 1),
        randomQ = Math.floor(Math.random() * 1 + 1),
        quote = await (await fetch(`http://loremricksum.com/api/?paragraphs=${randomP}&quotes=${randomQ}`)).json()
    return quote;
}

const wait = async (secs) => {
    await new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, secs * 1000);
    })
}

const createPost = async (char) => {
    let div = document.createElement("div"),
        img = document.createElement("img"),
        h3 = document.createElement("h3"),
        learnMore = styleLearnMore("h3"),
        location = false;

    if (char.location.url.length > 0) { location = await (await fetch(`${char.location.url}`)).json()}
    let onHover = createHover(char, location);

    createImg(img, char.image)
    h3.innerText = `name: ${char.name}`

    div.classList.add("post")
    div.append(h3, img, learnMore);
    grid.append(div)

    learnMore.addEventListener("click", () => { div.append(onHover) })
    onHover.children[1].addEventListener("click", () => {
        new Promise((res,rej)=>{
            onHover.classList.toggle("remove-hover")
            setTimeout(() => {
                res()
            }, 1000);
        }).then(e=>{
            onHover.classList.toggle("remove-hover")
            onHover.remove()
        })
    })
}
const createImg = (img, url) => {
    img.src = url
    img.style.width = "17vw"
}
const styleLearnMore = (headingType) => {
    let learnMore = document.createElement(headingType)
    learnMore.style.cursor = "pointer"
    learnMore.innerText = "Learn More"
    return learnMore;
}

const createHover = (character, location) => {
    let onHover = document.createElement("div"),
        info = document.createElement("h4"),
        removeHover = styleLearnMore("h4");
    info.style.padding = ".5rem"
    onHover.classList.add("on-hover")

    info.innerHTML = `created: ${returnDate(character)}
    location: ${character.location.name}
    species: ${character.species}`
    if (location) {
        info.innerText += `
        location name: ${location.name}
        dimension: ${location.dimension}
        location type: ${location.type}`
    }

    onHover.append(info, removeHover)
    return onHover
}
const returnDate = (character) => {
    return character.created.slice(8, 10) + character.created.slice(4, 7) + "-" + character.created.slice(0, 4)
}
const genApi = async () => { await gen() }
function checkBottom() { if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { gen(false) } }


window.onload = function () { genApi() };
