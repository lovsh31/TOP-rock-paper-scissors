//Select elements
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const display = document.querySelector("#display");
const score = document.querySelector("#score");
const message = document.querySelector("#message");







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


//Ask the user to enter his answer between "Rock,Paper or scissors" and place his answer in userChoice
//Format it to lower case and check it is an acceptable answer
//IF it is return the value
//ELSE Warn the user and Ask the user to enter his answer again 
function getUserChoice(){
    let userPrompt = prompt("Enter rock, paper or scissors");
    while(userPrompt!==null){
        let lower = userPrompt.toLowerCase();
        if(lower==="rock" || lower==="paper" || lower==="scissors"){
            return lower;
         }else{
            userPrompt = prompt("Enter rock, paper or scissors");
        }    
    }   
    return false;        
}


//Create a function playGame that starts 5 round and decide a winner
function playGame(){
    let countRound=0;
    let userQuit = false;
    //Create two variable to keep score
    let userScore = 0;
    let computerScore = 0;

    


    function playRound(userSelection){
        if(countRound<5){
            computerChoice = getComputerChoice();
            if(userSelection==="rock"){
                switch(computerChoice){
                    case "rock":
                        message.textContent = "It's a tie!";
                        score.textContent = `You: ${userScore} Computer: ${computerScore}`;                        
                        break;
                    case "paper":
                        message.textContent = "You lose! Paper beats Rock";
                        computerScore++;
                        score.textContent = `You: ${userScore} Computer: ${computerScore}`;

                        break;
                    case "scissors":
                        message.textContent = "You win! Rock beats Scissors";
                        userScore++;
                        score.textContent = `You: ${userScore} Computer: ${computerScore}`;

                        break;
                }
            }else if(userSelection==="paper"){
                switch(computerChoice){
                    case "rock":
                        message.textContent = "You win! Paper beats Rock";
                        userScore++;
                        score.textContent = `You: ${userScore} Computer: ${computerScore}`;

                        break;
                    case "paper":
                        message.textContent = "It's a tie!";
                        score.textContent = `You: ${userScore} Computer: ${computerScore}`;

                        break;
                    case "scissors":
                        message.textContent = "You lose! Scissors beats Paper";
                        computerScore++;
                        score.textContent = `You: ${userScore} Computer: ${computerScore}`;
                        break;
                }
            }else{
                switch(computerChoice){
                    case "rock":
                        message.textContent = "You lose! Rock beats Scissors";
                        computerScore++;
                        score.textContent = `You: ${userScore} Computer: ${computerScore}`;

                        break;
                    case "paper":
                        console.log("You win! Scissors beats Paper");
                        userScore++;
                        score.textContent = `You: ${userScore} Computer: ${computerScore}`;

                        break;
                    case "scissors":                    
                        message.textContent = "It's a tie!";
                        score.textContent = `You: ${userScore} Computer: ${computerScore}`;
                        break;                
                }
            }
        }else{
            const finalMessage = (userScore>computerScore)?"You are the grand winner!":
            (userScore<computerScore)?"Game Over! You lose":
            "The game is a TIE!";
            console.log(finalMessage);
        }
    }

        
    //Create a variable computerChoice that contain a empty string
    let computerChoice = "";

    /*Create a variable userChoice that contain a empty string
    let userChoice = getUserChoice();*/
    
    //event listener on button to start a round
    rock.addEventListener("click", ()=>{
        playRound("rock");
        countRound++;
    });
    scissors.addEventListener("click", ()=>{
        playRound("scissors");
        countRound++;
    });
    paper.addEventListener("click", ()=>{
        playRound("paper");
        countRound++;
    });
        
    if (userQuit){
        const finalMessage = "Don't be a chicken! Game Over";
        console.log(finalMessage);
    }
}
playGame();





