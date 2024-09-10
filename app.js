// GlobalVar

const buttons = document.querySelectorAll('button');
let humanChoice;
let ComputerChoice;

// Elección del humano

function getHumanChoice(){

    buttons.forEach(button => {
        button.addEventListener("click", event => {
           humanChoice = event.target.dataset.choice;  
        });
    });
}

// Elección de la computadora

function getComputerChoice() {
    let choicePc = Math.floor(Math.random() * 100);

    if (choicePc <= 33) {
        ComputerChoice = "piedra";
    } else if (choicePc <= 66) {
        ComputerChoice = "papel";
    } else {
        ComputerChoice = "tijera";
    }
}
