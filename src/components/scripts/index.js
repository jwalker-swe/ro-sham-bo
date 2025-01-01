const heading = document.querySelector("#heading");
const iconContainer = document.querySelector("#rps-icons");
const playButton = document.querySelector("#play-button");

let iconRock = document.querySelector("#iconRock");
let iconPaper = document.querySelector("#iconPaper");
let iconScissors = document.querySelector("#iconScissors");

const footer = document.querySelector(".footer-container");
const winTotal = document.querySelector("#win-total");
const drawTotal = document.querySelector("#draw-total");
const lossTotal = document.querySelector("#loss-total");

let gameState = "ready";
let winStreak = 0;
let lossStreak = 0;
let draws = 0;

winTotal.innerText = `${draws}`;

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

    if (results === 'you win') {
        winStreak++;
        winTotal.innerText = winStreak.toString();
    } 
    
    if (results === 'you lose') {
        lossStreak++;
        lossTotal.innerText = lossStreak.toString();
    }

    if (results === 'draw') {
        draws++;
        drawTotal.innerText = draws.toString();
    }

    return [results, winStreak, lossStreak, draws];
}

// Create function to add in a play again button after a game is played
const addPlayAgainButton = function() {
    const playAgainButton = document.createElement("button");

    iconContainer.insertAdjacentElement("afterend", playAgainButton);

    const playAgainContent = document.createTextNode("PLAY AGAIN");
    playAgainButton.appendChild(playAgainContent);
    playAgainButton.classList.add('button');
    playAgainButton.id = "play-again-button";
    return;
}

const reset = function() {
    heading.innerText = 'MAKE YOUR SELECTION';

    // Remove any existing icons
    iconRock.remove();
    iconPaper.remove();
    iconScissors.remove();

    // Create icons again
    iconRock = document.createElement("img");
    iconPaper = document.createElement("img");
    iconScissors = document.createElement("img");

    iconContainer.appendChild(iconRock);
    iconContainer.appendChild(iconPaper);
    iconContainer.appendChild(iconScissors);

    // Set icon classes and ids
    iconRock.classList.add('icon');
    iconRock.classList.add('rock');
    iconRock.id = 'iconRock';

    iconPaper.classList.add('icon');
    iconPaper.classList.add('paper');
    iconPaper.id = 'iconPaper';
    
    iconScissors.classList.add('icon');
    iconScissors.classList.add('scissors');
    iconScissors.id = 'iconScissors';

    // Set icon img src
    iconRock.src = 'src/assets/imgs/icon-rock.png';
    iconPaper.src = 'src/assets/imgs/icon-paper.png';
    iconScissors.src = 'src/assets/imgs/icon-scissors.png';

    resetButton.remove();
    playGame();
}

// Create funciton to start game of rock paper scissors
const playGame = function() {
    // Change gameState to playing
    gameState = 'playing';

    // Declare variables used
    let computerChoice = cc();
    console.log(`Computer chose: ${computerChoice}`);

    // Update UI
    playButton.remove();
    footer.classList.add('hidden');
    heading.innerText = 'MAKE YOUR SELECTION';

    iconRock.classList.add('icon-button');
    iconPaper.classList.add('icon-button');
    iconScissors.classList.add('icon-button');

    // Determine if the player has chosen rock, paper, or scissors based on which icon is clicked
    if (gameState === 'playing') {
        iconRock.addEventListener('click', () => {
            // Update UI
            iconRock.classList.remove('icon-button');
            iconPaper.remove();
            iconScissors.remove();
            footer.classList.remove('hidden');
            
            // Set playerChoice variable
            playerChoice = 'rock';
            console.log(`You chose: ${playerChoice}`);
    
            // Update heading text
            heading.innerText = `${dw(playerChoice, computerChoice)[0].toUpperCase()}`
    
            // Add button to play again
            addPlayAgainButton();
    
            gameState = 'complete';
            resetButton = document.querySelector('#play-again-button');
            
            resetButton.addEventListener('click', reset);
        });
        iconPaper.addEventListener('click', () => {
            // Update UI
            iconPaper.classList.remove('icon-button');
            iconRock.remove();
            iconScissors.remove();
            footer.classList.remove('hidden');
    
            // Set playerChoice variable
            playerChoice = 'paper';
            console.log(`You chose: ${playerChoice}`);
    
            // Update heading text
            heading.innerText = `${dw(playerChoice, computerChoice)[0].toUpperCase()}`
    
            // Add button to play again
            addPlayAgainButton();
    
            gameState = 'complete';
            resetButton = document.querySelector('#play-again-button');
            
            resetButton.addEventListener('click', reset);
        });
        iconScissors.addEventListener('click', () => {
            // Update UI
            iconScissors.classList.remove('icon-button');
            iconRock.remove();
            iconPaper.remove();
            footer.classList.remove('hidden');
    
            // Set playerChoice variable
            playerChoice = 'scissors';
            console.log(`You chose: ${playerChoice}`);
    
            // Update heading text
            heading.innerText = `${dw(playerChoice, computerChoice)[0].toUpperCase()}`
    
            // Add button to play again
            addPlayAgainButton();
    
            gameState = 'complete';
            resetButton = document.querySelector('#play-again-button');
            
            resetButton.addEventListener('click', reset);
        });
    };
    return;
};

playButton.addEventListener('click', () => {
    gameState = 'playing';
    playGame();
});