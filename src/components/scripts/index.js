const heading = document.querySelector("#heading");
const iconContainer = document.querySelector("#rps-icons");
const playButton = document.querySelector("#play-button");
const playAgainButton = document.querySelector("#play-again-button");

const iconRock = document.querySelector("#iconRock");
const iconPaper = document.querySelector("#iconPaper");
const iconScissors = document.querySelector("#iconScissors");

let gameState = "start";

// Create function to determine computer choice
const cc = function() {
    let odds = Math.random();

    if (odds < 0.33) {
        return 'rock';
    } if (odds >= 0.33 && odds < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Create function to determine winner: player or computer
const dw = function(arg1, arg2) {
    rules = {
        rock: {rock: 'draw', paper: 'you lose', scissors: 'you win'},
        paper: {rock: 'you win', paper: 'draw', scissors: 'you lose'},
        scissors: {rock: 'you lose', paper: 'you win', scissors: 'draw'}
    }

    let results = rules[arg1][arg2];
    return results;
}

// Create function to add in a play again button after a game is played
const addPlayAgainButton = function() {
    const playAgainButton = document.createElement("button");

    iconContainer.insertAdjacentElement("afterend", playAgainButton);

    const playAgainContent = document.createTextNode("PLAY AGAIN");
    playAgainButton.appendChild(playAgainContent);
    playAgainButton.classList.add('button');
    playAgainButton.id = "play-again-button";
}

// Create funciton to start game of rock paper scissors
const startGame = function() {
    
    // Determine current game state, either start or reset. Start represents a game state in which we are ready to begin. Reset represents a game state in which the board needs to be reset.
    if (gameState === "start") {
        
        // Declare variables used
        let computerChoice = cc();
        console.log(`Computer chose: ${computerChoice}`);

        // Update UI
        playButton.remove();
        heading.innerText = 'MAKE YOUR SELECTION';

        iconRock.classList.add('icon-button');
        iconPaper.classList.add('icon-button');
        iconScissors.classList.add('icon-button');

        // Determine if the player has chosen rock, paper, or scissors based on which icon is clicked
        iconRock.addEventListener('click', () => {
            // Update UI
            iconRock.classList.remove('icon-button');
            iconPaper.remove();
            iconScissors.remove();
            
            // Set playerChoice variable
            playerChoice = 'rock';
            console.log(`You chose: ${playerChoice}`);

            // Update heading text
            heading.innerText = `${dw(playerChoice, computerChoice).toUpperCase()}`

            // Add button to play again
            addPlayAgainButton();
        });
        iconPaper.addEventListener('click', () => {
            // Update UI
            iconPaper.classList.remove('icon-button');
            iconRock.remove();
            iconScissors.remove();

            // Set playerChoice variable
            playerChoice = 'paper';
            console.log(`You chose: ${playerChoice}`);

            // Update heading text
            heading.innerText = `${dw(playerChoice, computerChoice).toUpperCase()}`

            // Add button to play again
            addPlayAgainButton();
        });
        iconScissors.addEventListener('click', () => {
            // Update UI
            iconScissors.classList.remove('icon-button');
            iconRock.remove();
            iconPaper.remove();

            // Set playerChoice variable
            playerChoice = 'scissors';
            console.log(`You chose: ${playerChoice}`);

            // Update heading text
            heading.innerText = `${dw(playerChoice, computerChoice).toUpperCase()}`

            // Add button to play again
            addPlayAgainButton();
        });
    }
}

playButton.addEventListener('click', startGame); 
playAgainButton.addEventListener('click', playAgain);