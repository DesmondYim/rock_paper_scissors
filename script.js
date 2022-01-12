window.onload = function() {
    let choices = ['rock', 'paper', 'scissors'];
    let roundResults = "";
    let playerScore = 0;
    let computerScore = 0;
    let gameResults = "";

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
        // if (playerScore === 5) {
        //     resetComputerScore();
        //     resetPlayerScore();
        // } else if (computerScore === 5) {
        //     resetComputerScore();
        //     resetPlayerScore();
        if (playRound(playerSelection, computerSelection) == results[0]) {
            return playerScore++;
        } else if (playRound(playerSelection, computerSelection) == results[1]) {
            return computerScore++;
        }
    }

    function endGame() {
        if (playerScore === 5) {
            createPlayAgainButton();
            return gameResults = "You win!";
        } else if (computerScore === 5) {
            createPlayAgainButton();
            return gameResults = "You lose!";
        }
    }

    function createPlayAgainButton() {
        const playAgain = document.createElement('button');
        playAgain.classList.add('playAgain');
        playAgain.style.position = "absolute";
        playAgain.style.left = '46%';
        playAgain.textContent = 'Play again'

        body.appendChild(playAgain);

        playAgain.addEventListener('click', () => {
            resetPlayerScore();
            resetComputerScore();
            clearGameResults();
            playAgain.remove();
            resultsPara.textContent = roundResults;
            score.textContent = `Your score: ${playerScore} and Computer score: ${computerScore}`;
            gameEnd.textContent = gameResults;
        })
    }

    const resultsPara = document.createElement('div');
    resultsPara.classList.add('resultsPara');
    resultsPara.setAttribute('style', 'text-align:center');
    
    const score = document.createElement('div');
    score.classList.add('score');
    score.setAttribute('style', 'text-align:center');
    score.textContent = `Your score: ${playerScore} and Computer score: ${computerScore}`

    const gameEnd = document.createElement('div');
    gameEnd.classList.add('gameEnd');
    gameEnd.setAttribute('style', 'text-align:center', 'font-weight:900');
    
    const body = document.querySelector('body');
    body.appendChild(resultsPara);
    body.appendChild(score);
    body.appendChild(gameEnd);

    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection = "Rock";
            let computerSelection = computerPlay();
            playGame(playerSelection, computerSelection);
            roundResults = playRound(playerSelection, computerSelection);
            resultsPara.textContent = roundResults;
            score.textContent = `Your score: ${playerScore} and Computer score: ${computerScore}`;
            endGame();
            gameEnd.textContent = gameResults;
        }
    })

    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection = "Paper";
            let computerSelection = computerPlay();
            playGame(playerSelection, computerSelection);
            roundResults = playRound(playerSelection, computerSelection);
            resultsPara.textContent = roundResults;
            score.textContent = `Your score: ${playerScore} and Computer score: ${computerScore}`;
            endGame();
            gameEnd.textContent = gameResults;
        }
    })

    const scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection = "Scissors";
            let computerSelection = computerPlay();
            playGame(playerSelection, computerSelection);
            roundResults = playRound(playerSelection, computerSelection);
            resultsPara.textContent = roundResults;
            score.textContent = `Your score: ${playerScore} and Computer score: ${computerScore}`;
            endGame();
            gameEnd.textContent = gameResults;
        }
    })
}