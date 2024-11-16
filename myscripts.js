
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


//let answer = prompt("rock, paper, or scissors?")
function prompty () {
  return prompt("I SAID ROCK, PAPER, OR SCISSORS???");
}
function getHumanChoice() {  
   let answer = prompt("rock, paper, or scissors?");
   if ((answer === "") || (answer === null)) {
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
      return "A tie - no points for anyone!";
   } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
      humanScore++;
      return "A point for the Human! Rock breaks scissors.";
   } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
      computerScore++;
      return "A point for the Robot! Paper covers rock.";
   } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
      computerScore++;
      return "A point for the Robot! Scissors cut paper.";
   } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
      humanScore++;
      return "A point for the Human! Paper covers rock.";
   } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
      humanScore++;
      return "A point for the Human! Scissors cut paper.";
   } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
      computerScore++;
      return "A point for the Robot! Rock breaks scissors.";
   } else {
      return "Error";
   }
}

//let humanSelection = getHumanChoice();

//let computerSelection = getComputerChoice();

//console.log(playRound(getHumanChoice(), getComputerChoice()));



function playGame()  {
   for (let i = 0; i < 5; i++) {
      console.log(playRound(getHumanChoice(), getComputerChoice()));
   }
   if (humanScore > computerScore){
      console.log("human score: " + humanScore);
      console.log("robot score: " + computerScore);
      return "THE HUMAN WINS!";
   } else if (humanScore < computerScore) {
      console.log("human score: " + humanScore);
      console.log("robot score: " + computerScore);
      return "THE ROBOT WINS!";
   }else {
      console.log("human score: " + humanScore);
      console.log("robot score: " + computerScore);
      return "IT'S A DAMN TIE.";
   }
   
   }
      


console.log(playGame());




//console.log(humanSelection);
//console.log(computerSelection);
