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
            return'ERROR';
    }

    console.log(choice);
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
        case (player === 'SCISSORS') && (computer === 'ROCK'):
            return 'You Lose! Rock beats Scissors';
            break;
        default:
            return 'ERROR';
    }
    
}

// computerPlay();
playRound('SCIssoRS', 'RoCK');