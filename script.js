let choices = ['rock', 'paper', 'scissors'];

function playerChoose() {
    let playerChoice = prompt("Rock, paper, or scissors?");
    return playerChoice;
}

function computerPlay() {
    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
}

const playerChoice = playerChoose();
const computerChoice = computerPlay();
  
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() != "rock".toUpperCase() &&
            playerSelection.toUpperCase() != "paper".toUpperCase() &&
            playerSelection.toUpperCase() != "scissors".toUpperCase()) {
        return error = `You chose ${playerSelection} and the Computer chose ${computerSelection} 
            Error! Please input a valid choice!`;
    } else if ((playerSelection.toUpperCase() === "Paper".toUpperCase() && computerSelection.toUpperCase() === "Rock".toUpperCase()) ||
            (playerSelection.toUpperCase() === "Rock".toUpperCase() && computerSelection.toUpperCase() === "Scissors".toUpperCase()) ||
            (playerSelection.toUpperCase() === "Scissors".toUpperCase() && computerSelection.toUpperCase() === "Paper".toUpperCase())) {
        return win = `You chose ${playerSelection} and the Computer chose ${computerSelection}. 
            You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return tie = `You chose ${playerSelection} and the Computer chose ${computerSelection}.
            It's a tie! Both chose ${playerSelection}`;
    }
    else {
        return loss = `You chose ${playerSelection} and the Computer chose ${computerSelection}.
            You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
console.log(playRound(playerChoice, computerChoice));
// // console.log(playGame(playerSelection, computerSelection));
    
// function playGame() {
//     // for each round out of 5
//     const playerScore = 0;
//     const computerScore = 0;
//     for (let i = 0; i <= 5; i++) {
//         // play a round of Rock paper scissors
//         console.log(playRound());
//         // Add point to winner of round if winner available
//         // splitResults = playRound
//         // if ()

//         // console.log(playRound(playerSelection, computerSelection));
//     } 
// }
    // if playround is win
    //     then + 1 for me
    // else loss
    // then + 1 for computer
    // report score "Game end! You scored ___, and the computer scored ___"
    
    // for (let i = 0; i < 5; i++) {
    //     console.log(playRound(playerSelection,computerSelection));

// console.log(playGame());