// Global variables
const buttons = document.querySelectorAll('button');
const scorePcContainer = document.getElementById('score_pc');
const scoreHumanContainer = document.getElementById('score_human');
const resultContainer = document.getElementById('resultContainer');

let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

// Inicializa el juego
function initialize() {
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            humanChoice = event.target.dataset.choice;
            playGame(); // Llama a playGame cuando se haga clic en un botón
        });
    });
}

// Elección de la computadora
function getComputerChoice() {
    let choicePc = Math.floor(Math.random() * 100);

    if (choicePc <= 33) {
        computerChoice = "piedra";
    } else if (choicePc <= 66) {
        computerChoice = "papel";
    } else {
        computerChoice = "tijera";
    }
}

// Función para jugar una ronda
function playRound() {
    let resultPara;
    if (humanChoice === 'piedra' && computerChoice === 'tijera' ||
        humanChoice === 'papel' && computerChoice === 'piedra' ||
        humanChoice === 'tijera' && computerChoice === 'papel') {
        humanScore++;
        let scoreHumanPara = document.createElement('p');
        scoreHumanPara.textContent = `Tu puntaje: ${humanScore}`;
        scoreHumanContainer.textContent = ''; 
        scoreHumanContainer.appendChild(scoreHumanPara);

        resultPara = document.createElement('p');
        resultPara.textContent = 'Ganaste';
        resultContainer.textContent = ''; 
        resultContainer.appendChild(resultPara);

    } else if (humanChoice === computerChoice) {
        resultPara = document.createElement('p');
        resultPara.textContent = 'Empate';
        resultContainer.textContent = ''; 
        resultContainer.appendChild(resultPara);
    } else {
        computerScore++;
        let scoreComputerPara = document.createElement('p');
        scoreComputerPara.textContent = `Puntaje de PC: ${computerScore}`;
        scorePcContainer.textContent = ''; 
        scorePcContainer.appendChild(scoreComputerPara);

        resultPara = document.createElement('p');
        resultPara.textContent = 'Perdiste';
        resultContainer.textContent = ''; 
        resultContainer.appendChild(resultPara);
    }
}

// Función principal del juego
function playGame() {
    getComputerChoice();
    playRound();
}

// Inicializa el juego al cargar
initialize();