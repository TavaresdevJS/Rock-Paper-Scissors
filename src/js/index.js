const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const result = document.querySelector('#result');

//Function to generate random number to pick computer choice
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0){
        return 'rock'
    } else if(randomNumber === 1){
        return 'paper'
    } else{
        return 'scissors';
    }
}

//Function to get the human choice
function getHumanChoice(){
    const input = prompt("What’s your choice? (rock, paper, or scissors)");
    return input.toLowerCase();
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let gameOver = false;

    rockBtn.addEventListener("click", () => {
        if (gameOver) return;

        const humanChoice = "rock";
        const computerChoice = getComputerChoice();
        const roundMsg = playRound(humanChoice, computerChoice);
        result.innerText = `You chose ${humanChoice} and computer ${computerChoice}\n${roundMsg}` +
    `\nScore: You ${humanScore} - ${computerScore} Computer\n`;

        if (humanScore === 5) {
            result.innerText += "\n\nCongrats Playa, you won!";
            gameOver = true;
        } else if (computerScore === 5) {
            result.innerText += "\n\nThe machines conquered the world. Call John Connor";
            gameOver = true;
        }
    });

    paperBtn.addEventListener("click", () => {
        if (gameOver) return;

        const humanChoice = "paper";
        const computerChoice = getComputerChoice();
        const roundMsg = playRound(humanChoice, computerChoice);
        result.innerText = `You chose ${humanChoice} and computer ${computerChoice}\n${roundMsg}` +
        `\nScore: You ${humanScore} - ${computerScore} Computer\n`;

        if (humanScore === 5) {
            result.innerText += "\n\nCongrats Playa, you won!";
            gameOver = true;
        } else if (computerScore === 5) {
            result.innerText += "\n\nThe machines conquered the world. Call John Connor";
            gameOver = true;
        }
    });

    scissorsBtn.addEventListener("click", () => {
        if (gameOver) return;

        const humanChoice = "scissors";
        const computerChoice = getComputerChoice();
        const roundMsg = playRound(humanChoice, computerChoice);
        result.innerText = `You chose ${humanChoice} and computer ${computerChoice}\n${roundMsg}`+
        `\nScore: You ${humanScore} - ${computerScore} Computer\n`;

        if (humanScore === 5) {
            result.innerText += "\n\nCongrats Playa, you won!";
            gameOver = true;
        } else if (computerScore === 5) {
            result.innerText += "\n\nThe machines conquered the world. Call John Connor";
            gameOver = true;
        }
    });

    function playRound(humanChoice, computerChoice){
        

        //IF statement to get error message if the user enters wrong input

        if(
            
            humanChoice !== 'rock' &&
            humanChoice !== 'paper' &&
            humanChoice !== 'scissors'
        ) {
            return "Invalid choice, stupid.";
        }
        
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`);

        if (humanChoice === computerChoice){
            return "What!? Its a tie!!";
        }

        //All human wins possibilities
        if (humanChoice === 'rock' && computerChoice === 'scissors'){
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        } else if (humanChoice === 'paper' && computerChoice === 'rock'){
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`; 
        } else if (humanChoice === 'rock' && computerChoice === 'paper'){ //All computer wins possibilities
            computerScore++;
            return `Once again humanity loses to the machines! ${computerChoice} beats ${humanChoice}`;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
            computerScore++;
            return `Once again humanity loses to the machines! ${computerChoice} beats ${humanChoice}`;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
            computerScore++;
            return `Once again humanity loses to the machines! ${computerChoice} beats ${humanChoice}`;
        }

    }

    

    


}





playGame();
