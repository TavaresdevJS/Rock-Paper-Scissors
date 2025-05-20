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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));