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

let getComputerChoice =  () => Math.trunc(((Math.random() * 100) % 3) + 1);

const getHumanChoice = () => {
    
    let humanChoice;

    do{

       humanChoice = parseHumanChoice(prompt("choice: ")); 
    }

    while(!humanChoice);

    return humanChoice;
};  

const getMax = (var1, var2) => var1 > var2? var1 : var2;
const getMin = (var2, var2) => var1 < var2? var1 :  var2;

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

let computerScore = 0;
let humanScore = 0; 

console.log(computerChoice);
console.log(humanChoice);



