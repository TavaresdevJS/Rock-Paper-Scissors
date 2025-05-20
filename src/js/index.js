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

function getHumanChoice(){
    const input = prompt("What’s your choice? (rock, paper, or scissors)");
    return input.toLowerCase();
}

computerChoice = getComputerChoice();
humanChoice = getHumanChoice();
console.log(computerChoice);
console.log(humanChoice);
