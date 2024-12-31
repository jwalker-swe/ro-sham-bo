const heading = document.querySelector("#heading");
const iconContainer = document.querySelector("#rps-icons");
const playButton = document.querySelector("#play-button");

const iconRock = document.querySelector("#iconRock");
const iconPaper = document.querySelector("#iconPaper");
const iconScissors = document.querySelector("#iconScissors");

const createIconButtons = function() {
    iconRock.classList.add('icon-button');
    iconPaper.classList.add('icon-button');
    iconScissors.classList.add('icon-button');
}

const playChoice = function() {
    let playerOption = {}
}

const startGame = function() {
    playButton.classList.add('hidden');
    heading.innerText = 'Which do you choose?';

    createIconButtons();

    playButton.remove();
}

playButton.addEventListener('click', startGame); 