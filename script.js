let playerChoice = prompt("Rock, paper, or scissors?");

function computerPlay() {
    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
}

function play(playerSelection, computerSelection) {
    console.log("You chose", playerSelection, "and the Computer chose", computerSelection);
    if ((playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")) {
        console.log("You win!", playerSelection, "beats", computerSelection);
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie, both chose", playerSelection);
    }
        else {
        console.log("You lose!", computerSelection, "beats", playerSelection);
    }
}

play(playerChoice, computerPlay())