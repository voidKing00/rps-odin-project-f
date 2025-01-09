const ATTACK_TYPE = ["ROCK", "PAPER", "SCISSOR"];
const getComputerChoice =  () => Math.trunc(((Math.random() * 100) % 3) + 1);

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

const printWinner = (computerScore, humanScore) => computerScore > humanScore ? alert(`Winner is Computer`) : alert(`Winner is Human`);

const manipulateEntityScreen = (entityScreen, attackInput) => {entityScreen.textContent = `${ATTACK_TYPE[attackInput-1]}`};

function playRound(humanChoice, entities, screens){
     
    let computerChoice = getComputerChoice();

    manipulateEntityScreen(screens[1], humanChoice);
    manipulateEntityScreen(screens[2], computerChoice);

    let winnerChoice = getWinner(humanChoice, computerChoice);
    
    if (winnerChoice === 0){

        screens[0].textContent = `DRAW`;

    }else if(winnerChoice === humanChoice){
        
        screens[0].textContent = "Winner is Human"
        entities[0]++;

    }else{

        screens[0].textContent = "Winner is Computer"
        entities[1]++;
    }


    console.log(`human : ${entities[0]}`)
    console.log(`computer : ${entities[1]}`)

    if(entities[0] === 3 || entities[1] === 3){

        alert("GAME OVER!!");
    
    }
}

const entities = [0, 0];
const gameStartButton = document.querySelector("#game-start");
const attackContainer = document.querySelector(".attack-container");
const screens = [

    document.querySelector("#main-screen"),
    document.querySelector("#human-screen"),
    document.querySelector("#computer-screen")
]

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorButton = document.querySelector("#scissor-button");

gameStartButton.addEventListener("click", () => {
    
    
    gameStartButton.parentNode.style.display = "none";
    attackContainer.style.display = "flex";
    screens[0].textContent = "Select your attack";

  
});

rockButton.addEventListener("click", () => playRound(1, entities, screens));
paperButton.addEventListener("click", () => playRound(2, entities, screens));  
scissorButton.addEventListener("click", () => playRound(3, entities, screens));

