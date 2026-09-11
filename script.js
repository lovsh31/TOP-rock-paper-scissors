//Create two variable to keep score
let userScore = 0;
let computerScore = 0;
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
//Create a variable computerChoice that contain a empty string
const computerChoice = getComputerChoice();
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
//Create a variable userChoice that contain a empty string
const userChoice = getUserChoice();
console.log(userChoice);

//Compare the value of userChoice and computerChoice, alert the use and increment the score
// rock > scissors
// paper > rock
// scissors > paper
function playRound(userSelection,computerSelection){
    if(userSelection==="rock"){
        switch(computerSelection){
            case "rock":
                console.log("It's a tie!");
                console.log("You: "+userScore);
                console.log("Computer: "+computerScore);
                break;
            case "paper":
                console.log("You lose! Paper beats Rock");
                computerScore++;
                console.log("You: "+userScore);
                console.log("Computer: "+computerScore);
                break;
            case "scissors":
                console.log("You win! Rock beats Scissors");
                userScore++;
                console.log("You: "+userScore);
                console.log("Computer: "+computerScore);
                break;
        }
    }else if(userSelection==="paper"){
        switch(computerSelection){
            case "rock":
                console.log("You win! Paper beats Rock");
                userScore++;
                console.log("You: "+userScore);
                console.log("Computer: "+computerScore);
                break;
            case "paper":
                console.log("It's a tie!");
                console.log("You: "+userScore);
                console.log("Computer: "+computerScore);
                break;
            case "scissors":
                console.log("You lose! Scissors beats Paper");
                computerScore++;
                console.log("You: "+userScore);
                console.log("Computer: "+computerScore);
                break;
        }
    }else{
        switch(computerSelection){
            case "rock":
                computerScore++;
                console.log("You: "+userScore);
                console.log("Computer: "+computerScore);
                break;
            case "paper":
                console.log("You win! Scissors beats Paper");
                userScore++;
                console.log("You: "+userScore);
                break;
            case "scissors":
                console.log("You lose! Rock beats Scissors");
                console.log("Computer: "+computerScore);console.log("It's a tie!");
                console.log("You: "+userScore);
                console.log("Computer: "+computerScore);
                break;                
        }
    }
}
playRound(userChoice,computerChoice);
