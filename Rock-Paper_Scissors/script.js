let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };



function getComputerMove() {
    const number = Math.random();
    if (number < 1 / 3 && number > 0) {
        return 'Rock';
    } else if (number < 2 / 3 && number > 1 / 3) {
        return 'Paper';
    } else if (number < 1 && number > 2 / 3) {
        return 'Scissors'
    }
}


function getResult(playerMove) {
    const computerMove = getComputerMove();

    let result;
    let info, player, computer;

    


    if (playerMove === 'Rock') {
        player = `<img src="images/rock-emoji.png">`

        if (computerMove === 'Rock') {
            computer = '<img src="images/rock-emoji.png">';
            result = 'Tie.'
        } else if (computerMove === 'Paper') {
            computer = `<img src="images/paper-emoji.png">`;
            result = 'You loose.'
        } else if (computerMove === 'Scissors') {
            computer = `<img src="images/scissors-emoji.png">`;
            result = 'You win.'
        }
    } else if (playerMove === 'Paper') {
        player = `<img src="images/paper-emoji.png">`;

        if (computerMove === 'Rock') {
            computer = '<img src="images/rock-emoji.png">';
            result = 'You win.'
        } else if (computerMove === 'Paper') {
            computer = `<img src="images/paper-emoji.png">`;
            result = 'Tie.'
        } else if (computerMove === 'Scissors') {
            computer = `<img src="images/scissors-emoji.png">`;
            result = 'You loose.'
        }
    } else if (playerMove === 'Scissors') {
        player = `<img src="images/scissors-emoji.png">`;
        if (computerMove === 'Rock') {
            computer = '<img src="images/rock-emoji.png">';
            result = 'You loose.'
        } else if (computerMove === 'Paper') {
            computer = `<img src="images/paper-emoji.png">`;
            result = 'You win.'
        } else if (computerMove === 'Scissors') {
            computer = `<img src="images/scissors-emoji.png">`;
            result = 'Tie.'
        }
    }

    if (result === 'Tie.') {
        score.ties += 1;
    } else if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You loose.') {
        score.losses += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));


    document.querySelector('.result').innerHTML = result;
    
    info = `You ${player} ${computer} Computer`
    document.querySelector('.info').innerHTML = info 

    document.querySelector('.stats').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`


}

function resetScores() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.removeItem('score');

    document.querySelector('.stats').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}


document.querySelector('.stats').innerHTML = 
  `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
