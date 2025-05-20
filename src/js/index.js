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

    // 5 rounds gameplay loop

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(result);
        console.log(`Your score: ${humanScore} - Computer score: ${computerScore}`)
    }

    //If and Else if statements to tell who is the winner
    if (humanScore > computerScore) {
        console.log("Congrats Playa, you won!");
    } else if (humanScore < computerScore) {
        console.group("The machines conquered the world. Call John Connor");
    } else {
        console.log("It's a tie!");
    }
}

playGame();
