let playerChoice = prompt("Rock, paper, or scissors?");

function computerPlay() {
    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
}

function play(playerSelection, computerSelection) {
    if ((playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")) {
            console.log ("You win!", playerSelection, "beats", computerSelection)
    }
}