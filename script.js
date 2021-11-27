let playerChoice = prompt("Rock, paper, or scissors?");

function computerPlay() {
    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() != "rock".toUpperCase() &&
            playerSelection.toUpperCase() != "paper".toUpperCase() &&
            playerSelection.toUpperCase() != "scissors".toUpperCase()) {
        return `You chose ${playerSelection} and the Computer chose ${computerSelection} 
            Error! Please input a valid choice!`;
    } else if ((playerSelection.toUpperCase() === "Paper".toUpperCase() && computerSelection.toUpperCase() === "Rock".toUpperCase()) ||
            (playerSelection.toUpperCase() === "Rock".toUpperCase() && computerSelection.toUpperCase() === "Scissors".toUpperCase()) ||
            (playerSelection.toUpperCase() === "Scissors".toUpperCase() && computerSelection.toUpperCase() === "Paper".toUpperCase())) {
        return `You chose ${playerSelection} and the Computer chose ${computerSelection}. 
            You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return `You chose ${playerSelection} and the Computer chose ${computerSelection}.
            It's a tie, both chose ${playerSelection}`;
    }
        else {
        return `You chose ${playerSelection} and the Computer chose ${computerSelection}.
            You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

    const playerSelection = playerChoice;
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

//     console.log("You chose", playerSelection, "and the Computer chose", computerSelection);
//     if (playerSelection.toUpperCase() != "rock".toUpperCase() &&
//             playerSelection.toUpperCase() != "paper".toUpperCase() &&
//             playerSelection.toUpperCase() != "scissors".toUpperCase()) {
//         console.log("Error! Please input a valid answer")
//     } else if ((playerSelection.toUpperCase() === "Paper".toUpperCase() && computerSelection.toUpperCase() === "Rock".toUpperCase()) ||
//             (playerSelection.toUpperCase() === "Rock".toUpperCase() && computerSelection.toUpperCase() === "Scissors".toUpperCase()) ||
//             (playerSelection.toUpperCase() === "Scissors".toUpperCase() && computerSelection.toUpperCase() === "Paper".toUpperCase())) {
//         console.log("You win!", playerSelection, "beats", computerSelection);
//     } else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
//         console.log("It's a tie, both chose", playerSelection);
//     }
//         else {
//         console.log("You lose!", computerSelection, "beats", playerSelection);
//     }
// }

// play(playerChoice, computerPlay())