function parseHumanChoice(humanChoice){
    
    humanChoice = humanChoice.toLowerCase();

    switch(humanChoice){

        case "rock":
            
            return 1; 
        
        case "paper":
            
            return 2;
        
        case "scissor":
        case "scissors":

            return 3;
        
        default:

            return 0;
    }
    
}

const getComputerChoice =  () => Math.trunc(((Math.random() * 100) % 3) + 1);

const getHumanChoice = () => {
    
    let humanChoice;

    do{

       humanChoice = parseHumanChoice(prompt("choice: ")); 
    }

    while(!humanChoice);

    return humanChoice;
};  

const getWinner = (computerChoice, humanChoice) => {

    let combinedChoice = computerChoice + humanChoice;

    if(computerChoice == humanChoice){
        
        return 0;

    }else if(combinedChoice === 4){
        
        return computerChoice < humanChoice ? computerChoice : humanChoice;

    }else{
        
        return computerChoice > humanChoice ? computerChoice: humanChoice;
    
    }   
};

const parseChoice = (choice) => {
    
    switch(choice){
        
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3: 
            return "SCISSOR";
           
    }
};

const printWinner = (computerScore, humanScore) => computerScore > humanScore ? alert(`Winner is Computer`) : alert(`Winner is Human`);


function playRound(humanChoice, computerChoice){
    
    const gameRounds = 5;
    let currentGameRound = 1;

    let computerScore = 0;
    let humanScore = 0;

    while(currentGameRound <= 5){

        console.log("GAME START");
        console.log(`Round ${currentGameRound}`);
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();

        console.log(`Computer Choice : ${computerChoice}`);
        console.log(`Human Choice : ${humanChoice}`);

        let winnerChoice = getWinner(computerChoice, humanChoice);
        
        if(!winnerChoice){continue;}

        if (winnerChoice === computerChoice){

            computerScore++;
            alert(`You Lose! ${parseChoice(computerChoice)} beats ${parseChoice(humanChoice)}`);
        
        }else{

            humanScore++;
            alert(`You Win! ${parseChoice(humanChoice)} beats ${parseChoice(computerChoice)}`);
        }

        currentGameRound++;

    } 

    printWinner(computerScore, humanScore);

}

let computerChoice;
let humanChoice;

playRound(computerChoice, humanChoice);

