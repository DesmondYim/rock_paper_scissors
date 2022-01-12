window.onload = function() {
    let choices = ['rock', 'paper', 'scissors'];
    let roundResults = "";
    let playerScore = 0;
    let computerScore = 0;

    const results = ['win', 'loss', 'tie']

    function computerPlay() {
        let computerChoices = ['Rock', 'Paper', 'Scissors'];
        // let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]; // not working in loop
        // return computerChoice;
        return computerChoices[Math.floor(Math.random() * computerChoices.length)]
    }

    function playRound(playerSelection, computerSelection) {
        const winCondition = (playerSelection === "Paper" && computerSelection === "Rock" ||
            playerSelection === "Rock" && computerSelection === "Scissors" ||
            playerSelection === "Scissors" && computerSelection === "Paper");
        
        const lossCondition = (playerSelection === "Paper" && computerSelection === "Scissors" ||
            playerSelection === "Rock" && computerSelection === "Paper" ||
            playerSelection === "Scissors" && computerSelection === "Rock");
        
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

    function resetPlayerScore() {
        return playerScore = 0;
    }
    function resetComputerScore() {
        return computerScore = 0;
    }
    function clearGameResults() {
        return gameResults = "";
    }

    function playGame(playerSelection, computerSelection) {
        playRound(playerSelection, computerSelection);
        if (playerScore === 5) {
            alert("You win!")
            resetComputerScore();
            resetPlayerScore();
        } else if (computerScore === 5) {
            alert("You lose!")
            resetComputerScore();
            resetPlayerScore();
        } else if (playRound(playerSelection, computerSelection) == results[0]) {
            return playerScore++;
        } else if (playRound(playerSelection, computerSelection) == results[1]) {
            return computerScore++;
        }
    }
    
    const resultsPara = document.createElement('div');
    resultsPara.classList.add('resultsPara');
    resultsPara.setAttribute('style', 'text-align:center');
    
    const score = document.createElement('div');
    score.classList.add('score');
    score.setAttribute('style', 'text-align:center');
    score.textContent = `Your score: ${playerScore} and Computer score: ${computerScore}`
    
    const body = document.querySelector('body');
    body.appendChild(resultsPara);
    body.appendChild(score);

    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener('click', () => {
        let playerSelection = "Rock";
        let computerSelection = computerPlay();
        playGame(playerSelection, computerSelection);
        roundResults = playRound(playerSelection, computerSelection);
        resultsPara.textContent = roundResults;
        score.textContent = `Your score: ${playerScore} and Computer score: ${computerScore}`
    })

    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener('click', () => {
        let playerSelection = "Paper";
        let computerSelection = computerPlay();
        playGame(playerSelection, computerSelection);
        roundResults = playRound(playerSelection, computerSelection);
        resultsPara.textContent = roundResults;
        score.textContent = `Your score: ${playerScore} and Computer score: ${computerScore}`
    })

    const scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener('click', () => {
        let playerSelection = "Scissors";
        let computerSelection = computerPlay();
        playGame(playerSelection, computerSelection);
        roundResults = playRound(playerSelection, computerSelection);
        resultsPara.textContent = roundResults;
        score.textContent = `Your score: ${playerScore} and Computer score: ${computerScore}`
    })
}