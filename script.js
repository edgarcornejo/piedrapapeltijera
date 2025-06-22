const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const roundResultElement = document.getElementById('round-result');
const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const playerImageElement = document.getElementById('player-img');
const computerImageElement = document.getElementById('computer-img');

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'empate';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'jugador';
    }

    return 'computadora';
}

function updateScore(winner) {
    if (winner === 'jugador') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
        roundResultElement.style.color = '#2ecc71';
    } else if (winner === 'computadora') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
        roundResultElement.style.color = '#e74c3c';
    } else {
        roundResultElement.style.color = '#f1c40f';
    }
}

function updateChoicesDisplay(playerChoice, computerChoice) {
    const playerImage = `https://img.icons8.com/ios-filled/50/000000/${playerChoice}.png`;
    const computerImage = `https://img.icons8.com/ios-filled/50/000000/${computerChoice}.png`;
    
    playerImageElement.src = playerImage;
    computerImageElement.src = computerImage;
    playerImageElement.alt = playerChoice;
    computerImageElement.alt = computerChoice;
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    let resultText = '';
    
    if (winner === 'jugador') {
        resultText = '¡Ganaste!';
    } else if (winner === 'computadora') {
        resultText = '¡Perdiste!';
    } else {
        resultText = '¡Empate!';
    }

    roundResultElement.textContent = resultText;
    updateScore(winner);
    updateChoicesDisplay(playerChoice, computerChoice);
}

const resetButton = document.createElement('button');
resetButton.id = 'reset-btn';
resetButton.textContent = 'Reiniciar';
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
    roundResultElement.textContent = '¡Elige tu opción!';
    roundResultElement.style.color = '#FFF';
    playerImageElement.src = 'https://img.icons8.com/ios-filled/50/000000/user.png';
    computerImageElement.src = 'https://img.icons8.com/ios-filled/50/000000/computer.png';
});

document.querySelector('.container').appendChild(resetButton);
