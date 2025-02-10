let questions = [
    {
        "n_domanda": 1,
        "testo_domanda": "Qual è la capitale dell'Italia?",
        "risposta_utente": "",
        "risposta_corretta": "roma",
        "punteggio": 2
    },
    {
        "n_domanda": 2,
        "testo_domanda": "Come si chiama il fondatore di apple ?",
        "risposta_utente": "",
        "risposta_corretta": "stefano lavori ",
        "punteggio": 4
    },
    {
        "n_domanda": 3,
        "testo_domanda": "Quanti continenti ci sono?",
        "risposta_utente": "",
        "risposta_corretta": "7",
        "punteggio": 6
    },
    {
        "n_domanda": 4,
        "testo_domanda": "qual'è il cibo preferito del professore?",
        "risposta_utente": "",
        "risposta_corretta": "oresetti gommosi",
        "punteggio": 8
    },
    {
        "n_domanda": 5,
        "testo_domanda": "iphone fa schifo?",
        "risposta_utente": "",
        "risposta_corretta": "si",
        "punteggio": 10
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById('question-text').textContent = question.testo_domanda;
        document.getElementById('user-answer').value = ''; 
        document.getElementById('result').textContent = '';  
    } else {
        
        document.getElementById('result').textContent = `Hai completato il quiz! Il tuo punteggio è: ${score} punti.`;
        document.getElementById('quiz-form').style.display = 'none'; 
    }
}

function submitAnswer(event) {
    event.preventDefault();  

    const userAnswer = document.getElementById('user-answer').value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].risposta_corretta.toLowerCase();

    if (userAnswer === '') {
        alert('Per favore, inserisci una risposta!');
        return;
    }

    if (userAnswer === correctAnswer) {
        score += questions[currentQuestionIndex].punteggio;
    }

    currentQuestionIndex++;
    loadQuestion(); 
}


window.onload = loadQuestion;