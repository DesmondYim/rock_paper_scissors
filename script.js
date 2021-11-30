let choices = ['rock', 'paper', 'scissors'];

function playerChoose() {
    // return playerChoice = prompt("Rock, paper, or scissors?"); // not working in loop
    return prompt("Rock, paper, or scissors?");
}

function computerPlay() {
    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    // let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]; // not working in loop
    // return computerChoice;
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

const results = ['error', 'win', 'loss', 'tie']
  
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() != "rock".toUpperCase() &&
            playerSelection.toUpperCase() != "paper".toUpperCase() &&
            playerSelection.toUpperCase() != "scissors".toUpperCase()) {
        return results[0] = `You chose ${playerSelection} and the Computer chose ${computerSelection} 
            Error! Please input a valid choice!`;
    } else if ((playerSelection.toUpperCase() === "Paper".toUpperCase() && computerSelection.toUpperCase() === "Rock".toUpperCase()) ||
            (playerSelection.toUpperCase() === "Rock".toUpperCase() && computerSelection.toUpperCase() === "Scissors".toUpperCase()) ||
            (playerSelection.toUpperCase() === "Scissors".toUpperCase() && computerSelection.toUpperCase() === "Paper".toUpperCase())) {
        return results[1] = `You chose ${playerSelection} and the Computer chose ${computerSelection}. 
            You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return results[3] = `You chose ${playerSelection} and the Computer chose ${computerSelection}.
            It's a tie! Both chose ${playerSelection}`;
    }
    else {
        return results[2] = `You chose ${playerSelection} and the Computer chose ${computerSelection}.
            You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

let playerScore = 0;
let computerScore = 0;

function playGame() {
    let gameRound = 0
    while (gameRound < 5) {

        let playerChoice = playerChoose();
        let computerChoice = computerPlay();
        
        console.log(playRound(playerChoice, computerChoice));
        if (playRound(playerChoice, computerChoice) == results[0]) {
            console.log("Try again");
        } else if (playRound(playerChoice, computerChoice) == results[1]) {
            playerScore++;
        } else if (playRound(playerChoice, computerChoice) == results[2]) {
            computerScore++;
        } else {
            console.log(`No points for both!`)
        }
        gameRound++;
    } 
}
playGame();
if(playerScore > computerScore) {
    console.log("You win!");
} else {
    console.log("You lose!");
}
console.log(`Your Score: ${playerScore}     Computer Score: ${computerScore}`);