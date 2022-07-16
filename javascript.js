// Randomly returns either Rock, Paper or Scissors
function computerPlay() {

    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return 'ROCK';
            break;
        case 1:
            return 'PAPER';
            break;
        case 2:
            return 'SCISSORS';
            break;
        default:
            return 'ERROR';
    }

}

// Accepts player and computer choice
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();

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

}

// Determines who is the winner or loser
function getResults(playerSelection, computerSelection) {
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
function playGame(choice) {
    //for (let i = 0, wins = 0, loses = 0, ties = 0; i < 5; i++) 
    //let playerSelection = prompt('Rock, Paper, or Scissors?')
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

let wins = 0;
let loses = 0;
let ties = 0;
let games = 0;
let round = '';

const buttons = document.querySelectorAll('button');
const score = document.querySelector('#score');
const result = document.querySelector('#score');

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

        if (games == 5){
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
        }
        
        score.textContent = 'Wins: ' + wins + ' Loses: ' + loses + ' Tie: ' + ties;
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




