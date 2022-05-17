// Randomly returns either Rock, Paper or Scissors
function computerPlay() {
    
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            console.log('ROCK');
            break;
        case 1:
            console.log('PAPER');
            break;
        case 2:
            console.log('SCISSORS');
            break;
        default:
            console.log('ERROR');
    }

    console.log(choice);
}

// Accepts player and computer choice
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();

    switch (true) {
        case (player === 'ROCK') && (computer === 'PAPER'):
            console.log('You Lose! Paper beats Rock');
            break;
        case (player === 'ROCK') && (computer === 'SCISSORS'):
            console.log('You Won! Rock beats Scissors');
            break;
        case (player === 'ROCK') && (computer === 'ROCK'):
            console.log('Tie');
            break;
        
        case (player === 'PAPER') && (computer === 'ROCK'):
            console.log('You Won! Paper beats Rock');
            break;
        case (player === 'PAPER') && (computer === 'SCISSORS'):
            console.log('You Lose! Scissors beats Paper');
            break;
        case (player === 'PAPER') && (computer === 'PAPER'):
            console.log('Tie');
            break;

        case (player === 'SCISSORS') && (computer === 'PAPER'):
            console.log('You Won! Scissors beats Paper');
            break;
        case (player === 'SCISSORS') && (computer === 'ROCK'):
            console.log('You Lose! Rock beats Scissors');
            break;
        case (player === 'SCISSORS') && (computer === 'ROCK'):
            console.log('You Lose! Rock beats Scissors');
            break;
        default:
            console.log('ERROR');
    }
    
}

// computerPlay();
playRound('SCIssoRS', 'RoCK');