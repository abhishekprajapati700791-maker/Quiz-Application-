const questions = [
    {
        question: "What is the full form of HTML?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        correct: 0
    },

    {
        question: "What is CSS used for?",
        answers: [
            "Database",
            "Styling",
            "Programming",
            "Networking"
        ],
        correct: 1
    },

    {
        question: "What is JavaScript used for?",
        answers: [
            "To make a website interactive.",
            "Only designing",
            "Only database",
            "Image editing"
        ],
        correct: 0
    },

    {
        question: "What is the extension of an HTML file?",
        answers: [
            ".css",
            ".js",
            ".html",
            ".java"
        ],
        correct: 2
    },

    {
        question: "What is used to declare a variable in JavaScript?",
        answers: [
            "int",
            "var",
            "float",
            "string"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart-btn");

function startQuiz() {
    currentQuestion = 0;
    score = 0;

    resultElement.innerText = "";
    restartButton.style.display = "none";

    nextButton.style.display = "none";

    showQuestion();
}

function showQuestion() {

    resetState();

    let question = questions[currentQuestion];

    questionElement.innerText =
        (currentQuestion + 1) + ". " + question.question;

    question.answers.forEach((answer, index) => {

        let button = document.createElement("button");

        button.innerText = answer;
        button.classList.add("answer-btn");

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        answerButtons.appendChild(button);

    });
}

function resetState() {

    nextButton.style.display = "none";

    answerButtons.innerHTML = "";

}

function selectAnswer(selectedIndex) {

    let correctAnswer = questions[currentQuestion].correct;

    let buttons = answerButtons.children;

    if (selectedIndex === correctAnswer) {
        score++;
    }

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].disabled = true;

        if (i === correctAnswer) {
            buttons[i].classList.add("correct");
        }

        else if (i === selectedIndex) {
            buttons[i].classList.add("wrong");
        }

    }

    nextButton.style.display = "inline-block";

    if (currentQuestion === questions.length - 1) {
        nextButton.innerText = "Show Result";
    }

    else {
        nextButton.innerText = "Next";
    }
}

function showResult() {

    questionElement.innerText = "Quiz Completed!";

    answerButtons.innerHTML = "";

    nextButton.style.display = "none";

    resultElement.innerText =
        "Your Score: " + score + " / " + questions.length;

    restartButton.style.display = "inline-block";
}

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    }

    else {
        showResult();
    }

});

restartButton.addEventListener("click", startQuiz);

startQuiz();