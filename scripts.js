// Player score variables:
let humanScore = 0;
let computerScore = 0;

// Function to get a random choice from the computer:
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get user input:
function getHumanChoice() {
  let userChoice = prompt("Rock, Paper, Scissors: ").toLowerCase();
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    return userChoice;
  } else {
    alert("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
    return getHumanChoice(); // Recursively ask for input until valid
  }
}

// Function to play a single round:
function playRound(humanChoice, computerChoice) {
  console.log(`Human chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    return "IT'S A TIE!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "YOU WIN!";
  } else {
    computerScore++;
    return "YOU LOSE!";
  }
}

// Main game loop:
function game() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    console.log(result);
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
  }
  console.log("Final Score:");
  console.log(`Human: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
}

// Calling the function to play the game:
game();
