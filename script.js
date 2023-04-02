function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function getComputerChoice () {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2: 
            return "Scissors"
    }
}

function playRound (pChoice, cChoice) {
    if 
    (   pChoice == 'scissors' && cChoice == 'paper'
    ||  pChoice == 'paper' && cChoice == 'rock'
    ||  pChoice == 'rock' && cChoice == 'scissors'
    ) 
    {
        return 'Player'
    }

    else if 
    (
        cChoice == 'scissors' && pChoice == 'paper'
    ||  cChoice == 'paper' && pChoice == 'rock'
    ||  cChoice == 'rock' && pChoice == 'scissors'
    ) 
    {
        return 'Computer'
    }

    else 
    {
        return 'Draw'
    }
}

function game () {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = capitalize(prompt(`Choose: `));
        let computerChoice = getComputerChoice();

        winner = playRound(playerChoice.toLowerCase(), computerChoice.toLowerCase());
        
        if (winner == 'Player') {
            console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
            playerScore++;
        } else if (winner == 'Computer') {
            console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
            computerScore++;
        } else {
            console.log(`Draw! ${playerChoice} is the same as ${computerChoice}`);
        }
        
        console.log(`Current Score\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    }

    if (playerScore > computerScore) console.log(`Player wins with a score of ${playerScore}.`);
    else if (computerScore > playerScore) console.log(`Computer wins with a score of ${computerScore}.`);
    else console.log(`The game is a draw, tied at ${playerScore}.`);
}

game();