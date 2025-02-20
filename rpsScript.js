const rockChoice = document.querySelector('.rock');
const paperChoice = document.querySelector('.paper');
const scissorsChoice = document.querySelector('.scissors');
const gameChoices = document.querySelectorAll('.playCards');
const humanScoreDom = document.querySelector('.humanScore');
const computerScoreDom = document.querySelector('.computerScore');
const computerHandDom = document.querySelector('.computerRandomHand');
const separatorDom = document.querySelector('.separator');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function getHumanChoice(callback) {
  gameChoices.forEach((card) => {
    card.addEventListener('click', function (el) {
      const userSelection = el.target.classList.contains('rock')
        ? 'rock'
        : el.target.classList.contains('paper')
        ? 'paper'
        : el.target.classList.contains('scissors')
        ? 'scissors'
        : '';
      callback(userSelection);
    });
  });
}

let humanScore = 0;
let computerScore = 0;
const choicesArray = [
  '/images/fist.png',
  `/images/handgesture.png`,
  '/images/scissors.png',
];

function animateComputerHand() {
  let index = 0;
  const interval = setInterval(() => {
    computerHandDom.style.backgroundImage = `url(${choicesArray[index]})`;
    index = (index + 1) % choicesArray.length;
  }, 60);

  setTimeout(() => {
    clearInterval(interval);
    computerHandDom.style.backgroundImage = ``;
  }, 2000);
}

getHumanChoice((userSelection) => {
  let computerSelection = getComputerChoice();

  animateComputerHand();

  if (computerSelection) {
    computerHandDom.classList.add(`${computerSelection}`, 'card');
    separatorDom.classList.remove('hidden');
  }
  setTimeout(() => {
    computerHandDom.classList.remove(`${computerSelection}`, 'card');
    separatorDom.classList.add('hidden');
  }, 3500);

  setTimeout(() => {
    if (userSelection == 'rock') {
      if (computerSelection == 'scissors') {
        humanScore++;
        humanScoreDom.innerHTML = humanScore;
        rockChoice.classList.add('flashGreen');
        computerHandDom.classList.add('flashRed');
      }
      if (computerSelection == 'paper') {
        computerScore++;
        computerScoreDom.innerHTML = computerScore;
        computerHandDom.classList.add('flashGreen');
        rockChoice.classList.add('flashRed');
      }
      if (computerSelection == 'rock') {
        computerHandDom.classList.add('flashGreen');
        rockChoice.classList.add('flashGreen');
      }
    } else if (userSelection == 'paper') {
      if (computerSelection == 'rock') {
        humanScore++;
        humanScoreDom.innerHTML = humanScore;
        paperChoice.classList.add('flashGreen');
        computerHandDom.classList.add('flashRed');
      }
      if (computerSelection == 'scissors') {
        computerScore++;
        computerScoreDom.innerHTML = computerScore;
        computerHandDom.classList.add('flashGreen');
        paperChoice.classList.add('flashRed');
      }
      if (computerSelection == 'paper') {
        computerHandDom.classList.add('flashGreen');
        paperChoice.classList.add('flashGreen');
      }
    } else if (userSelection == 'scissors') {
      if (computerSelection == 'paper') {
        humanScore++;
        humanScoreDom.innerHTML = humanScore;
        scissorsChoice.classList.add('flashGreen');
        computerHandDom.classList.add('flashRed');
      }
      if (computerSelection == 'rock') {
        computerScore++;
        computerScoreDom.innerHTML = computerScore;
        computerHandDom.classList.add('flashGreen');
        scissorsChoice.classList.add('flashRed');
      }
      if (computerSelection == 'scissors') {
        computerHandDom.classList.add('flashGreen');
        scissorsChoice.classList.add('flashGreen');
      }
    }

    setTimeout(() => {
      rockChoice.classList.remove('flashGreen', 'flashRed');
      paperChoice.classList.remove('flashGreen', 'flashRed');
      scissorsChoice.classList.remove('flashGreen', 'flashRed');
      computerHandDom.classList.remove('flashGreen', 'flashRed');
    }, 1500);
  }, 2000);
});
