window.onload = function() {
    let choices = ['rock', 'paper', 'scissors'];
    let roundResults = "";

    // function playerChoose() {
    //     // return playerChoice = prompt("Rock, paper, or scissors?"); // not working in loop
    //     return prompt("Rock, paper, or scissors?");
    // }

    const resultsPara = document.createElement('div');
    resultsPara.classList.add('resultsPara');
    resultsPara.setAttribute('style', 'text-align:center;')

    const body = document.querySelector('body');
    body.appendChild(resultsPara);
    

    function computerPlay() {
        let computerChoices = ['Rock', 'Paper', 'Scissors'];
        // let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]; // not working in loop
        // return computerChoice;
        return computerChoices[Math.floor(Math.random() * computerChoices.length)]
    }

    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener('click', () => {
        let playerSelection = "Rock";
        roundResults = playRound(playerSelection, computerPlay());
        resultsPara.textContent = roundResults;
    })

    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener('click', () => {
        let playerSelection = "Paper";
        roundResults = playRound(playerSelection, computerPlay());
        resultsPara.textContent = roundResults;
    })

    const scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener('click', () => {
        let playerSelection = "Scissors";
        roundResults = playRound(playerSelection, computerPlay());
        resultsPara.textContent = roundResults;
    })

    const results = ['win', 'loss', 'tie']

    
    function playRound(playerSelection, computerSelection) {
        const winCondition = (playerSelection === "Paper" && computerSelection === "Rock" ||
            playerSelection === "Rock" && computerSelection === "Scissors" ||
            playerSelection === "Scissors" && computerSelection === "Paper");
        
        const tieCondition = playerSelection === computerSelection;

        if (winCondition) {
            return results[0] = `You chose ${playerSelection} and the Computer chose ${computerSelection}. 
            You win! ${playerSelection} beats ${computerSelection}`;
        } else if (tieCondition) {
            return results[2] = `You chose ${playerSelection} and the Computer chose ${computerSelection}.
            It's a tie! Both chose ${playerSelection}`;
        }
        else {
            return results[1] = `You chose ${playerSelection} and the Computer chose ${computerSelection}.
            You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }

    let playerScore = 0;
    let computerScore = 0;

    // function playGame() {
    //     let gameRound = 0
    //     while (gameRound < 5) {

    //         let playerChoice = playerChoose();
    //         let computerChoice = computerPlay();
        
    //         console.log(playRound(playerChoice, computerChoice));
    //         if (playRound(playerChoice, computerChoice) == results[0]) {
    //             console.log("Try again");
    //         } else if (playRound(playerChoice, computerChoice) == results[1]) {
    //             playerScore++;
    //         } else if (playRound(playerChoice, computerChoice) == results[2]) {
    //             computerScore++;
    //         } else {
    //             console.log(`No points for both!`)
    //         }
    //         gameRound++;
    //     } 
    // }
    // playGame();
    // if(playerScore > computerScore) {
    //     console.log("You win!");
    // } else {
    //     console.log("You lose!");
    // }
    // console.log(`Your Score: ${playerScore}     Computer Score: ${computerScore}`);
}