var time = 45;
var timeSet;
var hi_score = 0;
var score;
var randomChoice;
var  question;
var 









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
    // {
    //     question:
    //         "Bootstrap is a JavaScript library used to make styling easier.",
    //     answers: [
    //         { text: "true", correctAnswer: false },
    //         { text: "false", correctAnswer: true },
    //     ],
    // },
    // {
    //     question:
    //         "Which of these is used to make sure your JavaScript code is following proper syntax?",
    //     answers: [
    //         { text: "Express", correctAnswer: false },
    //         { text: "EsLint", correctAnswer: true },
    //         { text: "TypeScript", correctAnswer: false },
    //         { text: "Handlebars.js", correctAnswer: false },
    //     ],
    // },
];