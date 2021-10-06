let arr = []

async function genPeople() {
    try {
        for (let i = 1; i <= 10; i++) {
            const personGet = await (await fetch(`https://swapi.dev/api/people/${i}`)).json()
            let homeworld = await (await fetch(`${personGet.homeworld}`)).json()
            // console.log(personGet);
            let person = {
                name: personGet.name,
                height: personGet.height,
                hairColor: personGet.hair_color,
                planet: {
                    name: homeworld.name,
                    population: homeworld.population
                }
            }
            arr.push(person)
        }
    }
    catch(e){
        console.log("error !",e);
    }
}

async function createTable() {
    let tbl = document.createElement("table")
    let counter = 0;
    document.body.append(tbl)
    await genPeople();

    arr.unshift({
        name: "name",
        hair: "hair",
        height: "height",
        planet: {
            name: "planet name",
            population: "planet population"
        }
    })

    tbl.innerHTML += "<caption style='border: 1px solid black; font-size: 1.5rem; background:#0bea3c'>STAR WARS</caption>"
    for (let i of arr) {
        counter++;
        let tableRow = document.createElement("tr")
        tableRow.style.background = counter % 2 === 0 ? "lightgreen" : "green"
        for (let j in i) {
            if (typeof i[j] === "object") {
                tableRow.appendChild(createTd(i[j].name))
                tableRow.appendChild(createTd(i[j].population))
            }
            else {
                tableRow.appendChild(createTd(i[j]))
            }
        }
        tbl.appendChild(tableRow)
    }
    tbl.style.borderCollapse = "collapse";
}

function createTd(text) {
    let td = document.createElement("td")
    td.style.border = "1px solid black"
    td.style.textAlign = "center"
    td.innerText = text
    return td
}

createTable()
