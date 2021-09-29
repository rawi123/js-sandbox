const table = document.querySelector("#table")
for (let i = 1; i <= 10; i++) {
    const tr = document.createElement("tr")
    for (let j = 1; j <= 20; j++) {
        let tableRow = document.createElement("td")
        if (i === 1 && j === 1) {
            tableRow.innerHTML = "&times"
        }
        else {
            if (i === 1 || j === 1)
                tableRow = document.createElement("th")
            tableRow.innerText = i * j
        }
        tr.append(tableRow)
    }
    table.appendChild(tr)
}