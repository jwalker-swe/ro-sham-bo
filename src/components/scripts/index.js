const heading = document.querySelector("#heading");
const iconContainer = document.querySelector("#rps-icons");
const playButton = document.querySelector("#play-button");

const iconRock = document.querySelector("#iconRock");
const iconPaper = document.querySelector("#iconPaper");
const iconScissors = document.querySelector("#iconScissors");



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

const dw = function(arg1, arg2) {
    rules = {
        rock: {rock: 'draw', paper: 'you lose', scissors: 'you win'},
        paper: {rock: 'you win', paper: 'draw', scissors: 'you lose'},
        scissors: {rock: 'you lose', paper: 'you win', scissors: 'draw'}
    }

    let results = rules[arg1][arg2];
    return results;
}

const startGame = function() {

    //Declare variables used
    let computerChoice = cc();

    playButton.classList.add('hidden');
    heading.innerText = 'MAKE YOUR SELECTION';

    iconRock.classList.add('icon-button');
    iconPaper.classList.add('icon-button');
    iconScissors.classList.add('icon-button');

    console.log(`Computer chose: ${computerChoice}`);

    iconRock.addEventListener('click', () => {
        iconRock.classList.remove('icon-button');
        iconPaper.remove();
        iconScissors.remove();
        
        playerChoice = 'rock';
        console.log(`You chose: ${playerChoice}`);

        heading.innerText = `${dw(playerChoice, computerChoice).toUpperCase()}`
    });
    iconPaper.addEventListener('click', () => {
        iconPaper.classList.remove('icon-button');
        iconRock.remove();
        iconScissors.remove();

        playerChoice = 'paper';
        console.log(`You chose: ${playerChoice}`);

        heading.innerText = `${dw(playerChoice, computerChoice).toUpperCase()}`
    });
    iconScissors.addEventListener('click', () => {
        iconScissors.classList.remove('icon-button');
        iconRock.remove();
        iconPaper.remove();

        playerChoice = 'scissors';
        console.log(`You chose: ${playerChoice}`);

        heading.innerText = `${dw(playerChoice, computerChoice).toUpperCase()}`
    });
}

playButton.addEventListener('click', startGame); 