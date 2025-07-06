//  Player score variables:
let humanScore = 0;
let computerScore = 0;

//  Function to get a random choice from the computer:
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//  Function to get user input:
function getHumanChoice() {
  let userChoice = prompt("Rock, Paper, Scissors: ");
  if (userChoice.toLowerCase() == "rock") {
    return "rock";
  }
  if (userChoice.toLowerCase() == "paper") {
    return "paper";
  }
  if (userChoice.toLowerCase() == "scissors") {
    return "scissors";
  }
}

//  Function to calculate winner:
function playRound(humanChoice.toLowerCase(), computerChoice) {
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanChoice, computerChoice);
