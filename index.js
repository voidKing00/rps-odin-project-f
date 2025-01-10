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

const updateEntityScreenUI = (entityScreen, attackInput) => {entityScreen.textContent = `${ATTACK_TYPE[attackInput-1]}`};

const updateEntityScore = (entities, winner) => entities[winner]++;

const updateEntityScorePanelUI = (scorePanel, entities) => {
    
    scorePanel[0].textContent = `Human Score = ${entities[0]}`;
    scorePanel[1].textContent = `Computer Score = ${entities[1]}`;

};

function playRound(humanChoice, entities, screens, scorePanel){
     
    let computerChoice = getComputerChoice();

    updateEntityScreenUI(screens[1], humanChoice);
    updateEntityScreenUI(screens[2], computerChoice);

    let winnerChoice = getWinner(humanChoice, computerChoice);
    
    if (winnerChoice === 0){

        screens[0].textContent = `DRAW`;

    }else if(winnerChoice === humanChoice){
        
        screens[0].textContent= "Winner is Human"
        updateEntityScore(entities, 0);
        updateEntityScorePanelUI(scorePanel, entities);

    }else{

        screens[0].textContent = "Winner is Computer"
        updateEntityScore(entities, 1);
        updateEntityScorePanelUI(scorePanel, entities);
    }


    console.log(`human : ${entities[0]}`)
    console.log(`computer : ${entities[1]}`)

    if(entities[0] === 5 || entities[1] === 5){
        
        entities[0] = 0;
        entities[1] = 0;
        gameStartButton.textContent = "Restart?";
        gameStartButton.parentNode.style.display = "flex";
        attackContainer.style.display = "none";
        updateEntityScorePanelUI(scorePanel, entities);

 
    }
}


const entities = [0, 0];
const gameStartButton = document.querySelector("#game-start");
const attackContainer = document.querySelector(".attack-container");

const screens = [
    
    document.querySelector("#prompt-screen"),
    document.querySelector("#human-screen"),
    document.querySelector("#computer-screen")
]

const scorePanel = [document.querySelector("#human-score"), document.querySelector("#computer-score")];

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorButton = document.querySelector("#scissor-button");

gameStartButton.addEventListener("click", () => {
    
    gameStartButton.parentNode.style.display = "none";
    attackContainer.style.display = "flex";
    promptScreen.textContent = "Choose your attack";
  
});

rockButton.addEventListener("click", () => playRound(1, entities, screens, scorePanel));
paperButton.addEventListener("click", () => playRound(2, entities, screens, scorePanel));  
scissorButton.addEventListener("click", () => playRound(3, entities, screens, scorePanel));
