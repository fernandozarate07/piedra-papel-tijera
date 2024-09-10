// GlobalVar


const buttons = document.querySelectorAll('button');

// Elección de la computadora

function getComputerChoice() {
    let choicePc = Math.floor(Math.random() * 100);

    if (choicePc <= 33) {
        return "piedra";
    } else if (choicePc <= 66) {
        return "papel";
    } else {
        return "tijera";
    }
}

// Elección del humano

function getHumanChoice() {
    let choiceHum = prompt("Elige: piedra / papel / tijera").toLowerCase();

    if (choiceHum === "piedra" || choiceHum === "papel" || choiceHum === "tijera") {
        return choiceHum;
    } else if (choiceHum === "") {
        alert("Por favor, elige una de las siguientes palabras: piedra / papel / tijera");
        return null;
    } else {
        alert(`${choiceHum} no es una opción válida`);
        return null;
    }
}

// Función para jugar una ronda
function playRound(humanChoice, computerChoice) {
    if (humanChoice === null) {
        return "No se puede jugar sin una elección válida.";
    }

    if (humanChoice === computerChoice) {
        return "¡Empate!";
    } else if (humanChoice === "piedra" && computerChoice === "tijera") {
        return "¡Ganaste! La piedra aplasta a la tijera.";
    } else if (humanChoice === "papel" && computerChoice === "piedra") {
        return "¡Ganaste! El papel envuelve a la piedra.";
    } else if (humanChoice === "tijera" && computerChoice === "papel") {
        return "¡Ganaste! La tijera corta el papel.";
    } else {
        return `Lo siento, perdiste. La ${computerChoice} le gana a ${humanChoice}.`;
    }
}

// // Función para jugar el juego completo
// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         let humanChoice = getHumanChoice();
        
//         // Si la elección es inválida, vuelve a solicitarla
//         while (humanChoice === null) {
//             humanChoice = getHumanChoice();
//         }

//         let computerChoice = getComputerChoice();
//         console.log(`La PC eligió: ${computerChoice}`);

//         let result = playRound(humanChoice, computerChoice);
//         console.log(result);

//         // Actualizar puntuaciones
//         if (result.includes("Ganaste")) {
//             humanScore++;
//             console.log(`humano: ${humanScore}`);
//             console.log(`pc: ${computerScore}`);
//         } else if (result.includes("perdiste")) {
//             computerScore++;
//             console.log(`humano: ${humanScore}`);
//             console.log(`pc: ${computerScore}`);
//         }
//     }

//     console.log(`Puntuación final - Humano: ${humanScore}, Computadora: ${computerScore}`);
// }

// // Iniciar el juego
// playGame();

