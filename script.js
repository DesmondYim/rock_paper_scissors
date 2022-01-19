window.onload = function() {
    let roundResults = "";
    let playerScore = 0;
    let computerScore = 0;
    let gameResults = "";

    const results = ['win', 'loss', 'tie']

    function computerPlay() {
        let computerChoices = ['Rock', 'Paper', 'Scissors'];
        return computerChoices[Math.floor(Math.random() * computerChoices.length)]
    }

    function getMatchResult(playerSelection, computerSelection) {
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

    function changeScore(playerSelection, computerSelection) {
        if (getMatchResult(playerSelection, computerSelection) == results[0]) {
            return playerScore++;
        } else if (getMatchResult(playerSelection, computerSelection) == results[1]) {
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

    const ELEMENT = {
        DIV: "div",
    }

    const CSSCLASS = {
        RESULTPARA: "resultsPara",
        SCORE: "score",
        GAMEEND: "gameEnd",
    }

    const STYLE = {
        TEXTALIGNCENTER: 'text-align:center',
        
    }

    const resultsPara = document.createElement(ELEMENT.DIV);
    resultsPara.classList.add(CSSCLASS.RESULTPARA);
    resultsPara.setAttribute('style', STYLE.TEXTALIGNCENTER);
    
    const score = document.createElement(ELEMENT.DIV);
    score.classList.add(CSSCLASS.SCORE);
    score.setAttribute('style', STYLE.TEXTALIGNCENTER);
    score.textContent = `Your score: ${playerScore} and Computer score: ${computerScore}`

    const gameEnd = document.createElement(ELEMENT.DIV);
    gameEnd.classList.add(CSSCLASS.GAMEEND);
    gameEnd.setAttribute('style', 'text-align:center', 'font-weight:900');
    
    const body = document.querySelector('body');
    body.appendChild(resultsPara);
    body.appendChild(score);
    body.appendChild(gameEnd);

    const handleGame = function (playerSelection) {
        let computerSelection = computerPlay();
        changeScore(playerSelection, computerSelection);
        roundResults = getMatchResult(playerSelection, computerSelection);
        resultsPara.textContent = roundResults;
        score.textContent = `Your score: ${playerScore} and Computer score: ${computerScore}`;
        endGame();
        gameEnd.textContent = gameResults;
    }

    const handleRockClick = function () {
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection = "Rock";
            handleGame(playerSelection);
        }
    }

    const handlePaperClick = function () {
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection = "Paper";
            handleGame(playerSelection);
        }
    }

    const handleScissorsClick = function () {
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection = "Scissors";
            handleGame(playerSelection); 
        }
    }

    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener('click', handleRockClick)


    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener('click', handlePaperClick)

    const scissorsBtn = document.querySelector("#scissors");
        scissorsBtn.addEventListener('click', handleScissorsClick)
}