const quizData = [
    {
        question:'How olod is Mohan?',
        a:'20',
        b:'25',
        c:'29',
        d:'26',
        correct:'b'
    } , {
        question:'What is the most used programming language in 2023 ?',
        a:'Java',
        b:'Python',
        c:'C++',
        d:'Javascript',
        correct:'d'

    } , {
        question:'Who is the president of us?',
        a:'Joseph R. Biden',
        b:'Donald Trump',
        c:'Elon Musk',
        d:'Mohan',
        correct:'a'
    } , {
        question:'What does HTML stands for?',
        a:'Cascading Style Sheet',
        b:'Hypertext Markup Language',
        c:'Helicopters Terminal Motorboats',
        d:'none of these',
        correct:'b'
    } , {
        question:'What year was Javascript launched?',
        a:'1996',
        b:'1999',
        c:'1995',
        d:'none of these',
        correct:'c'
    }
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});