const h3 = document.querySelector("h3"),
    container = document.querySelector(".question-div"),
    shuffeledAnswer = [];
let questionNumber = 0,
    results,
    score = 0;

async function fetchQuestion() {
    const fetched = await (await fetch("https://opentdb.com/api.php?amount=10")).json()
    results = fetched.results
    playGame(results)
}
function playGame() {
    if (questionNumber < 9) {
        if (results[questionNumber].type === "multiple") { createQuestion(results[questionNumber], 4) }
        else { createQuestion(results[questionNumber], 2) }
    }
    else {
        container.innerHTML = `<h1>THANK YOU FOR PLAYING! PLEASE COME AGAIN!<br>score:${score}</h1>`
        container.classList.toggle("end-game")
        let btn=document.createElement("input")
        btn.type="submit"
        container.append(btn)
        btn.value="play again"
        btn.addEventListener("click",e=>{location.reload()})
    }


}
async function createQuestion(question, arrlength) {
    [...container.children].slice(1).map(e => { e.remove() })
    let arr = []
    for (let i = 0; i < arrlength; i++)
        arr.push(document.createElement("h2"))
    let rightQuestion = Math.floor(Math.random() * arrlength);
    h3.innerHTML = question.question
    shuffeledAnswer.length = 0
    for (let i = 0; i < arrlength - 1; i++) {
        arr[i].innerHTML = question.incorrect_answers[i]
        shuffeledAnswer.push(arr[i])
    }
    let rightAnswerSaved = arr[arrlength - 1]
    rightAnswerSaved.innerHTML = question.correct_answer

    shuffeledAnswer.splice(rightQuestion, 0, rightAnswerSaved)

    shuffeledAnswer.map(e => {
        e.classList.add("answer")
        if (e === rightAnswerSaved) {
            e.addEventListener("click", win)
        }
        else { e.addEventListener("click", wrongAnswer) }
        container.append(e)
    });
}
function win() {
    checkAnswer(true, this)
}

function wrongAnswer() {
    checkAnswer(false, this)
}
async function checkAnswer(flag, element) {
    shuffeledAnswer.map(e => {
        e.removeEventListener("click", wrongAnswer)
        e.removeEventListener("click", win)
    })
    await new Promise((res, rej) => {
        if (flag) {
            element.style.background = "green"
            score += 10
        }
        else {
            element.style.background = "red"
        }
        questionNumber++;
        setTimeout(() => {
            res()
            playGame()
        }, 1000);
    })
}
fetchQuestion()