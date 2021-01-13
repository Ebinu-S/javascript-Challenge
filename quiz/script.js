const questionEl = document.getElementById("question");

const quiz_questions = [
    {
        question: "What is Ebinu Suneer's age?",
        a: "10",
        b: "22",
        c: "25",
        d: "20",
        correct: "d"
    }, {
        question: "What is Ebinu Suneer's favorite food?",
        a: "Biriyani",
        b: "Bar-B-Que",
        c: "Thandoori",
        d: "none of the above",
        correct: "d"
    }, {
        question: "When was Youtube Launched?",
        a: "2010",
        b: "2012",
        c: "2005",
        d: "2004",
        correct: "c"
    }, {
        question: "what is the meaning of lol?",
        a: "Laughing Out Loud",
        b: "Lots Of Love",
        c: "League Of Legends",
        d: "Lord Of Laughter",
        correct: "a"
    }, {
        question: "What is full form of HTML",
        a: "Hypertext Markup Language",
        b: "Hydro Tender Main Lever",
        c: "Handy Text Main Language",
        d: "Hypertext Main Language",
        correct: "a"
    }, {
        question: "Who designed JavaScript?",
        a: "James Wonder",
        b: "Elon Musk",
        c: "Brendan Eich",
        d: "Lisa Su",
        correct: "c"
    }
]

function loadQuiz(){
    questionEl.innerHTML = quiz_questions[0].question;
}

loadQuiz()