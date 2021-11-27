let playerChoice = prompt("Rock, paper, or scissors?");

function computerPlay() {
    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
}

function playGame() {
    for each round out of 5
    if playround is win
        then + 1 for me
    else loss
    then + 1 for computer
    report score "You scored ___, and the computer scored ___"
    
    // for (let i = 0; i < 5; i++) {
    //     console.log(playRound(playerSelection,computerSelection));
    

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
}