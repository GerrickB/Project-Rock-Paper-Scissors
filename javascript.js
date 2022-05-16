// Returns either Rock, Paper or Scissors
function computerPlay() {
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            console.log(rock);
            break;
        case 1:
            console.log(paper);
            break;
        case 2:
            console.log(scissors);
            break;
        default:
            console.log('ERROR');
    }

    console.log(choice);
}

computerPlay();