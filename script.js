//Select elements
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const display = document.querySelector("#display");
const scoreU = document.querySelector("#scoreU");
const scoreC = document.querySelector("#scoreC");
const message = document.querySelector("#message");

const btnNewGame = document.createElement("button"); //Button to start a new game
const paraFinal = document.createElement("p");



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


//Create a function playGame that starts 5 round and decide a winner
function playGame(){
    let countRound=0;
    let userQuit = false;
    //Create two variable to keep score
    let userScore = 0;
    let computerScore = 0;
    //Create a variable computerChoice that contain a empty string
    let computerChoice = "";

    scoreU.textContent = userScore;       
    scoreC.textContent = computerScore;
    message.textContent = "";
    
    if(btnNewGame.textContent && paraFinal.textContent){ //If new game, we remove endgame button and text
        display.removeChild(btnNewGame);
        display.removeChild(paraFinal);
    }

    function playRound(userChoice){
        if(countRound<5){
            countRound++;
            computerChoice = getComputerChoice();
            if(userChoice==="rock"){
                switch(computerChoice){
                    case "rock":
                        message.textContent = "It's a tie!";
                        scoreU.textContent = userScore;       
                        scoreC.textContent = computerScore;                 
                        break;
                    case "paper":
                        message.textContent = "You lose! Paper beats Rock";
                        computerScore++;
                        scoreU.textContent = userScore;       
                        scoreC.textContent = computerScore;  
                        break;
                    case "scissors":
                        message.textContent = "You win! Rock beats Scissors";
                        userScore++;
                        scoreU.textContent = userScore;       
                        scoreC.textContent = computerScore;  
                        break;
                }
            }else if(userChoice==="paper"){
                switch(computerChoice){
                    case "rock":
                        message.textContent = "You win! Paper beats Rock";
                        userScore++;
                        scoreU.textContent = userScore;       
                        scoreC.textContent = computerScore;  

                        break;
                    case "paper":
                        message.textContent = "It's a tie!";
                        scoreU.textContent = userScore;       
                        scoreC.textContent = computerScore;  

                        break;
                    case "scissors":
                        message.textContent = "You lose! Scissors beats Paper";
                        computerScore++;
                        scoreU.textContent = userScore;       
                        scoreC.textContent = computerScore;  
                        break;
                }
            }else{
                switch(computerChoice){
                    case "rock":
                        message.textContent = "You lose! Rock beats Scissors";
                        computerScore++;
                        scoreU.textContent = userScore;       
                        scoreC.textContent = computerScore;
                        break;
                    case "paper":
                        message.textContent = "You win! Scissors beats Paper";
                        userScore++;
                        scoreU.textContent = userScore;       
                        scoreC.textContent = computerScore;  

                        break;
                    case "scissors":                    
                        message.textContent = "It's a tie!";
                        scoreU.textContent = userScore;       
                        scoreC.textContent = computerScore;  
                        break;                
                }
            }
        }
        if(countRound===5){
            const finalMessage = (userScore>computerScore)?"You are the grand winner!":
            (userScore<computerScore)?"Game Over! You lose":
            "The game is a TIE!";

            //Show finale message in a big fat font
            paraFinal.textContent = finalMessage;            
            paraFinal.classList.add("messageFinal");
            display.appendChild(paraFinal);

            //Add a button for a new game
            btnNewGame.textContent = "Play Again";
            display.appendChild(btnNewGame);
            btnNewGame.addEventListener("click", playGame);
            /*display.removeChild(btnNewGame);
            display.removeChild(paraFinal);*/
        }
    }

   
    //event listener on button to start a round
    rock.addEventListener("click", () => {
        if (countRound<5)
            playRound("rock");
    });
    scissors.addEventListener("click", ()=>{
        if (countRound<5)
            playRound("scissors");
    });
    paper.addEventListener("click", ()=>{
        if (countRound<5)
            playRound("paper");
    });
}
playGame();





