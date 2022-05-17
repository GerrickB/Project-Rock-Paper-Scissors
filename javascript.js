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
        case (player === 'PAPER') && (computer === 'ROCK'):
            console.log('You Won! Paper beats Rock');
            break;
        default:
            console.log('ERROR');
    }
    
}

// computerPlay();
playRound('Rock', 'Paper');