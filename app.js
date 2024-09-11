// Global variables
const buttons = document.querySelectorAll('#btnContainer button');
const btnStart = document.getElementById('btnStart');
const windowStart = document.getElementById('windowStart');

const scorePcContainer = document.getElementById('score_pc');
const scoreHumanContainer = document.getElementById('score_human');
const resultContainer = document.getElementById('resultContainer');

let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

// Inicializa el juego
function initialize() {
    humanScore = 0;
    computerScore = 0;
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            humanChoice = event.target.dataset.choice;
            playGame(); //
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
    if(humanScore === 3 || computerScore == 3){
        restartGame()
    }
}

// Función principal del juego
function playGame() {
    getComputerChoice();
    playRound();
}
function restartGame(){
    if(humanScore === 3){
        alert('Ganaste perrito :D')
        resultContainer.textContent='';
        scorePcContainer.textContent='';
        scoreHumanContainer.textContent='';
        humanScore = 0;
        computerScore=0
    }
    else if(computerScore === 3){
        alert('Perdiste perrito :C')
        resultContainer.textContent='';
        scorePcContainer.textContent='';
        scoreHumanContainer.textContent='';
        humanScore = 0;
        computerScore=0

    }
} 

btnStart.addEventListener("click", event=>{
    windowStart.style.display = "none"
    initialize();
})