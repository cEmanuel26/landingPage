// Code hints are disabled until further notice

function getHumanChoice() {
  let humanChoice = prompt(
    'Select one of the following choices : rock/paper/scissor'
  ).toLowerCase();

  return humanChoice;
}

function compareSelections() {
  // const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  let humanScore = 0;
  let computerScore = 0;
  if (humanSelection == 'rock') {
    if (computerSelection == 'scissors') {
      humanScore++;
      console.log(
        `You won . Score is: You-${humanScore} Computer-${computerScore}`
      );
    }
    if (computerSelection == 'paper') {
      computerScore++;
      console.log(
        `Computer won . Score is: You-${humanScore} Computer-${computerScore}`
      );
    }
    if (computerSelection == 'rock') {
      console.log(
        `You tied . Score is: You-${humanScore} Computer-${computerScore}`
      );
    }
    console.log(humanSelection, computerSelection);
  } else if (humanSelection == 'paper') {
    if (computerSelection == 'rock') {
      humanScore++;
      console.log(
        `You won . Score is: You-${humanScore} Computer-${computerScore}`
      );
    }
    if (computerSelection == 'scissors') {
      computerScore++;
      console.log(
        `Computer won . Score is: You-${humanScore} Computer-${computerScore}`
      );
    }
    if (computerSelection == 'paper') {
      console.log(
        `You tied . Score is: You-${humanScore} Computer-${computerScore}`
      );
    }
    console.log(humanSelection, computerSelection);
  } else if (humanSelection == 'scissors') {
    if (computerSelection == 'paper') {
      humanScore++;
      console.log(
        `You won . Score is: You-${humanScore} Computer-${computerScore}`
      );
    }
    if (computerSelection == 'rock') {
      computerScore++;
      console.log(
        `Computer won . Score is: You-${humanScore} Computer-${computerScore}`
      );
    }
    if (computerSelection == 'scissors') {
      console.log(
        `You tied . Score is: You-${humanScore} Computer-${computerScore}`
      );
    }
    console.log(humanSelection, computerSelection);
  }
}
function playGame() {}
compareSelections();
playGame();
