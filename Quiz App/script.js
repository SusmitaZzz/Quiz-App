const quizData = [
    {
        Question: "Who sang the title song for the latest Bond film, No Time to Die?",
        a: "Adele",
        b: "Sam Smith",
        c: "Billie Eilish",
        Correct: "c"
    },
    {
        Question: "Which of the following is NOT a fruit?",
        a: "Rhubarb",
        b: "Tomatoes",
        c: "Avocados",
        Correct: "a"
    },
    {
        Question: "Where was the first example of paper money used?",
        a: "China",
        b: "Turkey",
        c: "Greece",
        Correct: "a"
    },
    {
        Question: "Which of the following languages has the longest alphabet?",
        a: "Greek",
        b: "Russian",
        c: "Arabic",
        Correct: "b"
    },
    {
        Question: "What spirit is used in making a Tom Collins?",
        a: "Vodka",
        b: "Rum",
        c: "Gin",
        Correct: "c"
    },
    {
        Question: "Which horoscope sign is a fish?",
        a: "Aquarius",
        b: "Cancer",
        c: "Pisces ",
        Correct: "c"
    },
    {
        Question: "Which app has the most total users?",
        a: "TikTok",
        b: "Instagram",
        c: "Snapchat",
        Correct: "b"
    }
];

const questionsEl = document.getElementById("questions");
const answersEli = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz")

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submitBtn")

let currentQuiz= 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionsEl.innerText = currentQuizData.Question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function getSelected() {
    let answer = undefined;

    answersEli.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer() {
    answersEli.forEach((answerEl) => {
        answerEl.checked = false;
})
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].Correct){
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else{
            quiz.innerHTML = `
            <h2>You answered correctly ${score}/${quizData.length} questions.</h2>

            <button onclick="location.reload()">Reload</button>`;
        }
    }
})