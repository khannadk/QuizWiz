var timeRem = 45;
var timeSet;
var hiScore = 0;
var score;
var randomChoice;
// current question in quiz 
var questionChoice;
// Locations to house questions, question numbers, and answers 
var activeQuestion = document.getElementById("question");
var questionOptionsLoc = document.getElementById("question-options");
var questionNumbersLoc = document.getElementById("question-numbers");
var answerOptionsLoc = document.getElementById("answer-options");
// info for timer counting down 
const timerLocation = document.getElementById("time-start");

const quizQuestions = [

    {
        question: "Is JavaScript case sensitive?",
        answers: [
            { text: "true", correctAnswer: true },
            { text: "false", correctAnswer: false },
        ],        
    },
    {
        question: "What event occurs when you click on an HTML element?",
        answers: [
            { text: "onclick", correctAnswer: true },
            { text: "onchange", correctAnswer: false },
            { text: "zap", correctAnswer: false },            
        ],
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            { text: "<head>", correctAnswer: false },
            { text: "<body>", correctAnswer: false },
            { text: "Both places will work", correctAnswer: true },            
        ],
    },
];

quizStart();

function quizStart(){
    randomChoice = quizQuestions.sort(() => Math.random() - 0.5);
    questionChoice = 0;
    questionDisplay(randomChoice[questionChoice]);
    timerDisplay();
}

function questionDisplay(question) {
    if (timeRem <= 0 || questionChoice >= randomChoice) {
        score = timeRem;
        localStorage.setItem("newScore", score);

        return window.location.assign("hi-score.html");
    }

    activeQuestion.innerText = question.question;
    questionChoice++;
    // displays question number at the top
    questionNumbersLoc.textContent = `Question ${questionChoice} of ${randomChoice.length}`;
    // this creates a button element for each answer
    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn", "btn-primary", "btn-lg", "mr-2", "mb-2");
        // sets the dataset for the button if its the correct answer
        if (answer.correctAnswer) {
            button.dataset.correct = answer.correct;
        }
        // targets button and sends to answerSelect function
        button.addEventListener("click", answerSelect);
        answerOptionsLoc.appendChild(button);
    });
}

function answerSelect(e) {
    const selectedAnswer = e.target;
    // this will set correct to true or false
    correct = selectedAnswer.dataset.correct;
    classToApply(document.body, correct);
    Array.from(answerOptionsLoc.children).forEach((button) => {
        classToApply(button, button.dataset.correct);
    });
    if (!correct) {
        timeLeft -= 5;
    }
    resetClass();
}

// call this to remove the set class
function resetClass() {
    setTimeout(function () {
        // this loops until all button children are removed
        while (answerOptionsLoc.firstChild) {
            answerOptionsLoc.removeChild(answerOptionsLoc.firstChild);
        }
        clearClass(document.body);
        // call displayCurrentQuestion
        displayCurrentQuestion(randomChoice[questionChoice]);
    }, 1000);
}

function classToApply(element, correct) {
    // take and element in and set classes based on true or false

    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("incorrect");
    }
}
function clearClass(element) {
    // remove the correct or incorrect class
    element.classList.remove("correct");
    element.classList.remove("incorrect");
}

function timerDisplay() {
    // set interval for timer
   timeSet = setInterval(() => {
        timeRem--;
        timerLocation.textContent = "Timer " + timeRem;
        if (timeRem < 10) {
            timerLocation.textContent = "Timer " + "0" + timeRem;
        }
        if (timeRem <= 0) {
            timerLocation.textContent = "Timer " + "00:00";
            clearInterval(timerInterval);
        }
    }, 1000);
}
