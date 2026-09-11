//Create a variable computerChoice that contain a empty string
let computerChoice = "";
//Create a variable userChoice that contain a empty string
let userChoice = "";
//Create a function getComputerChoice that randomly choose "Rock,Paper or scissors" for the computer and place it in computerChoice
    //Generate a random number in the variable randomNumber 
    //IF randomNumber is < 33 return "Rock"
    //IF randomNumber is < 66 return "Paper"
    //ELSE return "Scissors"
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*100);
    if(randomNumber<33){
        return "rock";    
    }else if (randomNumber<66){
        return "paper";
    }else{
        return "scissors";
    }
}
computerChoice = getComputerChoice();
console.log(computerChoice);
//Ask the user to enter his answer between "Rock,Paper or scissors" and place his answer in userChoice
//Format it to lower case and check it is an acceptable answer
    //IF it is return the value
    //ELSE Warn the user and Ask the user to enter his answer again 
function getUserChoice(){
    let userPrompt = prompt("Enter rock, paper or scissors").toLowerCase();
    if(userPrompt==="rock" || userPrompt==="paper" || userPrompt==="scissors"){
        return userPrompt;
    }else{
        getUserChoice();
    }    
}
userChoice = getUserChoice();
console.log(userChoice);
//Compare the value of userChoice and computerChoice