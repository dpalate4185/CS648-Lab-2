var userChoice = prompt('Choose: rock, paper, or scissors');
if (userChoice === null) {
  alert("Game cancelled.");
} else {
  userChoice = userChoice.toLowerCase();

  if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    alert('Invalid choice. Please refresh and type "rock", "paper", or "scissors".');
  } else {
  
    var computerNumber = Math.floor(Math.random() * 3);
    var computerChoice;

    if (computerNumber === 0) {
      computerChoice = "rock";
    } else if (computerNumber === 1) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }

    
    var message = "You chose " + userChoice + ". Computer chose " + computerChoice + ".\n";

    if (userChoice === computerChoice) {
      message = message + "It's a tie!";
    } else if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        message = message + "Rock destroys scissors. You win!";
      } else {
        message = message + "Paper covers rock. You lose!";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        message = message + "Paper covers rock. You win!";
      } else {
        message = message + "Scissors cut paper. You lose!";
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        message = message + "Scissors cut paper. You win!";
      } else {
        message = message + "Rock destroys scissors. You lose!";
      }
    }

    alert(message);
  }
}
