// PseudoCodigo

// -Elección de computadora

// 1.Crea una nueva función llamada getComputerChoice.
// 2.Escriba el código para que getComputerChoicese obtenga aleatoriamente return uno de los siguientes valores de cadena: “piedra”, “papel” o “tijeras”.

// -Eleccion del humano.

// 3.Crea una nueva función llamada getHumanChoice.
// 4.Escriba el código para que getHumanChoicedevuelva una de las opciones válidas dependiendo de lo que ingrese el usuario, utilizando prompt()

// -Puntuacion de los jugadores

// 5.Cree dos nuevas variables denominadas humanScorey computerScoreen el ámbito global.
// 6.Inicialice esas variables con el valor de 0.
// 7.Crea una nueva función llamada playRound.
// 8.Defina dos parámetros para playRound: humanChoicey computerChoice. Utilice estos dos parámetros para tomar las opciones de la persona y la computadora como argumentos.
// 9.Haga que el parámetro de su función humanChoiceno distinga entre mayúsculas y minúsculas para que los jugadores puedan ingresar "rock", "ROCK", "RocK" u otras variaciones.
// 10.Escribe el código de tu playRoundfunción en console.logun valor de cadena que represente al ganador de la ronda, como por ejemplo: “¡Pierdes! El papel le gana a la piedra”.
// 11.Incrementa la variable humanScoreo computerScoreen función del ganador de la ronda.

// -lógica para jugar todo el juego.

// 12.Crea una nueva función llamada playGame.
// 13.Mueva sus playRound variables de función y puntuación para que se declaren dentro de la nueva playGamefunción
// 14.Juega 5 rondas llamando playRound5 veces.
// 15.Sugerencia : cuando asignas una llamada de función a una variable, el valor de retorno de esa función se asigna a la variable. Acceder a la variable posteriormente solo proporcionará el valor asignado; no recuperará la función. Debes recuperar las funciones de elección para obtener nuevas opciones para cada ronda.
// 16.Si es necesario, vuelva a trabajar en sus funciones anteriores o cree más funciones auxiliares. En concreto, es posible que desee cambiar los valores de retorno por otros más útiles.
// 17.Si ya conoces los bucles, puedes usarlos. Si no, ¡no te preocupes! Los bucles se tratarán en la próxima lección.

// Codigo:

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

// Función para jugar el juego completo
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        
        // Si la elección es inválida, vuelve a solicitarla
        while (humanChoice === null) {
            humanChoice = getHumanChoice();
        }

        let computerChoice = getComputerChoice();
        console.log(`La PC eligió: ${computerChoice}`);

        let result = playRound(humanChoice, computerChoice);
        console.log(result);

        // Actualizar puntuaciones
        if (result.includes("Ganaste")) {
            humanScore++;
            console.log(`humano: ${humanScore}`);
            console.log(`pc: ${computerScore}`);
        } else if (result.includes("perdiste")) {
            computerScore++;
            console.log(`humano: ${humanScore}`);
            console.log(`pc: ${computerScore}`);
        }
    }

    console.log(`Puntuación final - Humano: ${humanScore}, Computadora: ${computerScore}`);
}

// Iniciar el juego
playGame();
