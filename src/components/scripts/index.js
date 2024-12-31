const heading = document.querySelector("#heading");
const iconContainer = document.querySelector("#rps-icons");
const playButton = document.querySelector("#play-button");

const iconRock = document.querySelector("#iconRock");
const iconPaper = document.querySelector("#iconPaper");
const iconScissors = document.querySelector("#iconScissors");

const startGame = function() {

    //Declare variables used
    let computerChoice;
    let playerChoice;

    //Create and call function to change UI when playing begins
    const playingUI = function () {
        playButton.classList.add('hidden');
        heading.innerText = 'MAKE YOUR SELECTION';

        iconRock.classList.add('icon-button');
        iconPaper.classList.add('icon-button');
        iconScissors.classList.add('icon-button');
    };

    playingUI();

    //Create and call function to generate the computer's choice
    const cc = function() {
        let odds = Math.random();
        let choice;

        if (odds < 0.33) {
            choice = 'rock';
        } if (odds >= 0.33 && odds < 0.66) {
            choice = 'paper';
        } else {
            choice = 'scissors';
        }
        return choice;
    };

    computerChoice = cc();
    console.log(`The computer chose ${computerChoice}`)

    //Create and call function to determine player's choice
    const pc = function() {
        let choice;

        iconRock.addEventListener('click', () => {
            choice = 'rock';

            iconPaper.remove();
            iconScissors.remove();
            iconRock.classList.remove('icon-button');
            heading.innerText = `YOU CHOSE ${choice.toUpperCase()}`;

            console.log(`You chose ${choice}`)
        });
        iconPaper.addEventListener('click', () => {
            choice = 'paper';

            iconRock.remove();
            iconScissors.remove();
            iconPaper.classList.remove('icon-button');
            heading.innerText = `YOU CHOSE ${choice.toUpperCase()}`;

            console.log(`You chose ${choice}`)
        });
        iconScissors.addEventListener('click', () => {
            choice = 'scissors';

            iconRock.remove();
            iconPaper.remove();
            iconScissors.classList.remove('icon-button');
            heading.innerText = `YOU CHOSE ${choice.toUpperCase()}`;

            console.log(`You chose ${choice}`)
        })

        return choice;
    }

    playerChoice = pc();

    //Create and call function to determine the winner
    
}

playButton.addEventListener('click', startGame); 