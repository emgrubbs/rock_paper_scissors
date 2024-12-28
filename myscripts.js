
/*

METHOD 1:
Add E.L. attached to Rock button that calls up the playRound
function with the following parameters: ("rock", computerSelection).
Add E.L.s in the same vein to the other two buttons.

METHOD 1 DID NOT WORK! Event Listeners can't use a function with
its parenthese / parameters cause then it's using the *result*
of the function rather than the function itself.

METHOD 2:
Make each button run a specific version of playRound that passes
the button selection (rock, paper, or scissors) to the 
first parameter of the function. 



*/


function getComputerSelection() {
   let random = (Math.floor(Math.random() * 30));  
   //console.log(random);               
   if (random >= 0 && random <=14) {
      return "rock";
   } else if (random >= 10 && random <=19) {
      return "paper";
   } else  {
      return "scissors";
   }
};



/*
function prompty () {
  return prompt("I SAID ROCK, PAPER, OR SCISSORS???");
}
function getHumanSelection() {  
   let answer = prompt("rock, paper, or scissors?");
   if ((answer === "") || (answer === null)) {
      return prompty();
      }
   else {
      return answer.toLowerCase();
      }
   }
*/

let humanScore = 0;
let computerScore = 0;
let resultText = "";





const result = document.querySelector("h1");


const scoreboard = document.querySelector("h3");
scoreboard.textContent = score();
//const result = document.querySelector("h3");
const commentary = document.querySelector("p");
    //  result.textContent = finalResult();

function disableButtons() {
   const btn = document.querySelectorAll("button");
   btn.forEach(btn => {
      btn.disabled = true;
   })
};

function score() {
   if ((humanScore < 5) && (computerScore < 5)) {
   return `HUMAN:${humanScore}  ROBOT:${computerScore}`;
   } 
   else {
      if (humanScore > computerScore) {
         let resultText = "HUMAN WINS!";
         result.textContent = resultText;
         disableButtons();
         return `HUMAN:${humanScore}  ROBOT:${computerScore}`
      }
      else {
         let resultText = "ROBOT WINS!";
         result.textContent = resultText;
         disableButtons();
         return `HUMAN:${humanScore}  ROBOT:${computerScore}`
      }
   }
};
      


     




/*
function finalResult() {
   if (humanScore > computerScore) {
      return "Human Wins!"
   }
   else {
      return "Robot Wins!"
   }
};

*/




function playRound(humanSelection, computerSelection) {
  
   
      if (humanSelection === computerSelection) {
         
       
        scoreboard.textContent = score();
        commentary.textContent = "It's a tie! No points for anyone!";
     
      } else if ((humanSelection === "rock") && (computerSelection === "scissors")) {
      humanScore++;
   
      scoreboard.textContent = score();
      commentary.textContent = "HUMAN chooses rock; ROBOT chooses scissors. Rock breaks scissors.";

      
      } else if ((humanSelection === "rock") && (computerSelection === "paper")) {
      computerScore++;
      scoreboard.textContent = score();
      commentary.textContent = "HUMAN chooses rock; ROBOT chooses paper. Paper covers rock.";
     
      
      } else if ((humanSelection === "paper") && (computerSelection === "scissors")) {
      computerScore++;
      commentary.textContent = "HUMAN chooses paper; ROBOT chooses scissors. Scissors cut paper.";
     
      scoreboard.textContent = score();
     
      } else if ((humanSelection === "paper") && (computerSelection === "rock")) {
      humanScore++;
      commentary.textContent = "HUMAN chooses paper; ROBOT chooses rock. Paper covers rock.";
      scoreboard.textContent = score();
     
      } else if ((humanSelection === "scissors") && (computerSelection === "paper")) {
      humanScore++;
      commentary.textContent = "HUMAN chooses scissors; ROBOT chooses paper. Scissors cut paper.";
  
      scoreboard.textContent = score();
      
      } else {
      //((humanSelection === "scissors") && (computerSelection === "rock")) {
      computerScore++;
      commentary.textContent = "HUMAN chooses scissors; ROBOT chooses rock. Rock breaks scissors.";;
      scoreboard.textContent = score();
      };
};

function playRockRound() {
   playRound("rock", getComputerSelection());
};

function playPaperRound() {
   playRound("paper", getComputerSelection());
};

function playScissorsRound() {
   playRound("scissors", getComputerSelection());
};

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");


rockBtn.addEventListener("click", playRockRound);
paperBtn.addEventListener("click", playPaperRound);
scissorsBtn.addEventListener("click", playScissorsRound);


/*
function playRound (humanSelection, computerSelection) {
   if (humanSelection === computerSelection) {
      return "A tie - no points for anyone!";
   } else if ((humanSelection === "rock") && (computerSelection === "scissors")) {
      humanScore++;
      return "A point for the Human! Rock breaks scissors.";
   } else if ((humanSelection === "rock") && (computerSelection === "paper")) {
      computerScore++;
      return "A point for the Robot! Paper covers rock.";
   } else if ((humanSelection === "paper") && (computerSelection === "scissors")) {
      computerScore++;
      return "A point for the Robot! Scissors cut paper.";
   } else if ((humanSelection === "paper") && (computerSelection === "rock")) {
      humanScore++;
      return "A point for the Human! Paper covers rock.";
   } else if ((humanSelection === "scissors") && (computerSelection === "paper")) {
      humanScore++;
      return "A point for the Human! Scissors cut paper.";
   } else if ((humanSelection === "scissors") && (computerSelection === "rock")) {
      computerScore++;
      return "A point for the Robot! Rock breaks scissors.";
   } else {
      return "Error";
   }
}
*/

/*
function playGame()  {
  // for (let i = 0; i < 5; i++) {
   console.log(playRound(x, getComputerSelection()));
   //  }
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
*/