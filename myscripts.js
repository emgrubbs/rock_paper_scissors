/* PSEUDOCODE:

SEQUENCE:
When User inputs "Rock", "Paper", or "Scissors" into a Prompt, execute a function that starts the game.
The game will execute the function that makes the computer randomly choose between "Rock", "Paper", and "Scissors".
A function "playRound" will compare the two results (human and computer) and determine a winner.
The results will be logged as variables which will translate to "scores", initialized with values of 0.
Then "playRound" function will increment the winner's score by 1 point for each round won.
The "playRound" function will return a string message about winning to console.log.
The fucntion "playGame" will call "playRound" 5 times.

STEP 2: LOGIC TO GET COMPUTER CHOICE
This function will randomly return one of 3 strings.
A variable "prs" will call a function that uses the Math.random method to generate arandom number between 0 and .99999, 
and it will then multiply that number by 30,
and then execute the Math.floor function to round the number down to an integer.
If "prs" is >= 0 and <= 9, then the console will log the string "rock".
If "prs" is >= 10 and <=19, then the console will log the string "paper".
If "prs" is >= 20 and <29, then the console will log the string "scissors".

STEP 3: LOGIC TO GET HUMAN CHOICE
A prompt function will ask the user to input an answer to "rock, paper, or scissors?".
If the input is one of those three strings, then the function will return that string.

The function will then return the input.

STEP 5: LOGIC TO PLAY A SINGLE ROUND
Create variables for computerChoice and humanChoice that pull the "get" function returns.
The "playRound" function will take the computerChoice and humanChoice and determine the following:
if they are the same, then return "it's a tie!".
if cC is rock and hC is paper, then return "Human wins!" and increment humanScore +1.
If cC is rock and hC is scissors, then return "Computer wins!" and increment computerScore +1.
If cC is paper and hC is rock, then return "Computer wins!" and increment computerScore +1.
If cC is paper and hC is scissors, then return "Human wins!" and increment humanScore +1.
If cC is scissors and hC is paper, then return "Computer wins!" and increment computerScore +1.
If cC is scissors and hC is rock, then return "Human wins!" and increment humanScore +1.
else return "Error".

STEP 6: LOGIC TO PLAY THE ENTIRE GAME
Function "playGame" will use the "for" loop to repeat the game round (playRound) 5 times. 







*/

function getComputerChoice() {
   let random = (Math.floor(Math.random() * 30));                 
   if (random >= 0 && random <=14) {
      return "rock";
   } else if (random >= 10 && random <=19) {
      return "paper";
   } else  {
      return "scissors";
   }
}

//console.log(getComputerChoice());


let answer = prompt("rock, paper, or scissors?")
function prompty () {
   return prompt("I SAID ROCK, PAPER, OR SCISSORS, BITCH?");
}
function getHumanChoice() {  
   if (answer === "" || answer === null) {
      return prompty();
      }
   else {
      return answer.toLowerCase();
   }
   }
//console.log(getHumanChoice());


let humanScore = 0;
let computerScore = 0;

//let humanChoice = "scissors";
//let computerChoice = "scissors";

function playRound (humanChoice, computerChoice) {
   
   if (humanChoice === computerChoice) {
      computerScore++;
      humanScore++;
      return "It's a tie!";
   } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
      humanScore++;
      return "Human wins! Rock breaks scissors.";
   } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
      computerScore++;
      return "Computer wins! Paper covers rock.";
   } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
      computerScore++;
      return "Computer wins! Scissors cut paper.";
   } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
      humanScore++;
      return "Human wins! Paper covers rock.";
   } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
      humanScore++;
      return "Human wins! Scissors cut paper.";
   } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
      computerScore++;
      return "Computer wins! Rock breaks scissors.";
   } else {
      return "Error";
   }
}

let humanSelection = getHumanChoice();

let computerSelection = getComputerChoice();

//console.log(playRound(humanSelection, computerSelection));



function playGame()  {
   for (let i = 0; i < 5; i++) {
      console.log(playRound(getHumanChoice(), getComputerChoice()));
   }
   if (humanScore > computerScore){
      return "The human wins!";
   } else if (humanScore < computerScore) {
      return "Robots rule!";
   }else {
      return "It's a goddamn tie.";
   }
   }
      
   


console.log(playGame());

console.log(humanScore);
console.log(computerScore);
console.log(humanSelection);
console.log(computerSelection);
