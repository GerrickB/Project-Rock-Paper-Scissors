// Randomly returns either Rock, Paper or Scissors
const computerPlay = () => {

    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
        default:
            return 'ERROR';
    }

};

// Accepts player and computer choice
const playRound = (playerSelection, computerSelection) => {
    let playerChoice = playerSelection.toUpperCase();
    let computerChoice = computerSelection.toUpperCase();

    /*
    switch (true) {
        case (player === 'ROCK') && (computer === 'PAPER'):
            return 'You Lose! Paper beats Rock';
            break;
        case (player === 'ROCK') && (computer === 'SCISSORS'):
            return 'You Won! Rock beats Scissors';
            break;
        case (player === 'ROCK') && (computer === 'ROCK'):
            return 'Tie';
            break;

        case (player === 'PAPER') && (computer === 'ROCK'):
            return 'You Won! Paper beats Rock';
            break;
        case (player === 'PAPER') && (computer === 'SCISSORS'):
            return 'You Lose! Scissors beats Paper';
            break;
        case (player === 'PAPER') && (computer === 'PAPER'):
            return 'Tie';
            break;

        case (player === 'SCISSORS') && (computer === 'PAPER'):
            return 'You Won! Scissors beats Paper';
            break;
        case (player === 'SCISSORS') && (computer === 'ROCK'):
            return 'You Lose! Rock beats Scissors';
            break;
        case (player === 'SCISSORS') && (computer === 'SCISSORS'):
            return 'Tie';
            break;
        default:
            return 'ERROR';
    }
    */

    if (playerChoice === computerChoice) {
        return 'Tie';
    }
    if (playerChoice === 'ROCK') {
        if (computerChoice === 'PAPER') {
            return `You lost! Computer chose ${computerChoice} and beat your ${playerChoice}`;
        } else {
            return `You won! Your ${playerChoice} beat computer's ${computerChoice}`;
        }
    }
    if (playerChoice === 'PAPER') {
        if (computerChoice === 'SCISSORS') {
            return `You lost! Computer chose ${computerChoice} and beat your ${playerChoice}`;
        } else {
            return `You won! Your ${playerChoice} beat computer's ${computerChoice}`;
        }
    }
    if (playerChoice === 'SCISSORS') {
        if (computerChoice === 'ROCK') {
            return `You lost! Computer chose ${computerChoice} and beat your ${playerChoice}`;
        } else {
            return `You won! Your ${playerChoice} beat computer's ${computerChoice}`;
        }
    }

}

// Determines who is the winner or loser
const getResults = (playerSelection, computerSelection) => {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();

    switch (true) {
        case (player === 'ROCK') && (computer === 'PAPER'):
            return 'Lose';
            break;
        case (player === 'ROCK') && (computer === 'SCISSORS'):
            return 'Win';
            break;
        case (player === 'ROCK') && (computer === 'ROCK'):
            return 'Tie';
            break;

        case (player === 'PAPER') && (computer === 'ROCK'):
            return 'Win';
            break;
        case (player === 'PAPER') && (computer === 'SCISSORS'):
            return 'Lose';
            break;
        case (player === 'PAPER') && (computer === 'PAPER'):
            return 'Tie';
            break;

        case (player === 'SCISSORS') && (computer === 'PAPER'):
            return 'Win';
            break;
        case (player === 'SCISSORS') && (computer === 'ROCK'):
            return 'Lose';
            break;
        case (player === 'SCISSORS') && (computer === 'ROCK'):
            return 'Tie';
            break;
        default:
            return 'ERROR';
    }

}

//Plays five rounds of Rock Paper Scissors
const playGame = choice => {
    
    let playerSelection = choice;
    let computerSelection = computerPlay();
    let result = getResults(playerSelection, computerSelection);

    console.log((playRound(playerSelection, computerSelection)));

    if (result === 'Win') {
        return 'Win';
    } else if (result === 'Lose') {
        return 'Lose';
    } else {
        return 'Tie';
    }

}

const buttons = document.querySelectorAll('button');
const score = document.querySelector('#score');
const result = document.querySelector('#result');

let wins = 0;
let loses = 0;
let ties = 0;
let games = 0;
let round = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        round = playGame(button.id)
        games++;
        if (round == 'Win'){
            wins++;
        }
        if (round == 'Lose'){
            loses++;
        }
        if (round == 'Tie'){
            ties++;
        }

        score.textContent = 'Wins: ' + wins + ' Loses: ' + loses + ' Tie: ' + ties;

        if (games == 5){
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
        }
        
        if (games == 5){
            if (wins > loses) {
                result.textContent = ' You Won! Wins: ' + wins + ' Loses: ' + loses; 
            } else if (wins < loses) {
                result.textContent = ' You Lost! Wins: ' + wins + ' Loses: ' + loses;
            } else {
                result.textContent = ' Tied! Wins: ' + wins + ' Loses: ' + loses;
            }
        }
    });
});








