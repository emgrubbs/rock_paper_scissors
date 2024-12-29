function getRobotSelection() {
   let random = (Math.floor(Math.random() * 30));                
   if (random >= 0 && random <=14) {
      return "rock";
   } else if (random >= 10 && random <=19) {
      return "paper";
   } else  {
      return "scissors";
   };
}
let humanScore = 0;
let robotScore = 0;
let resultText = "";
const result = document.querySelector("h1");
const scoreboard = document.querySelector("h3");
scoreboard.textContent = score();
const commentary = document.querySelector("p");
function disableButtons() {
   const btn = document.querySelectorAll("button");
   btn.forEach(btn => {
      btn.disabled = true;
   })
}
function score() {
   if ((humanScore < 5) && (robotScore < 5)) {
   return `HUMAN:${humanScore}  ROBOT:${robotScore}`;
   } 
   else {
      if (humanScore > robotScore) {
         let resultText = "HUMAN WINS!";
         result.textContent = resultText;
         disableButtons();
         return `HUMAN:${humanScore}  ROBOT:${robotScore}`
      }
      else {
         let resultText = "ROBOT WINS!";
         result.textContent = resultText;
         disableButtons();
         return `HUMAN:${humanScore}  ROBOT:${robotScore}`
      }
   }
};
function playRound(humanSelection, robotSelection) {
   if (humanSelection === robotSelection) {
      scoreboard.textContent = score();
      commentary.textContent = "It's a tie! No points for anyone!";
   } else if ((humanSelection === "rock") && (robotSelection === "scissors")) {
      humanScore++;
      scoreboard.textContent = score();
      commentary.textContent = "HUMAN chooses rock; ROBOT chooses scissors. Rock breaks scissors.";
   } else if ((humanSelection === "rock") && (robotSelection === "paper")) {
      robotScore++;
      scoreboard.textContent = score();
      commentary.textContent = "HUMAN chooses rock; ROBOT chooses paper. Paper covers rock.";
   } else if ((humanSelection === "paper") && (robotSelection === "scissors")) {
      robotScore++;
      commentary.textContent = "HUMAN chooses paper; ROBOT chooses scissors. Scissors cut paper.";
      scoreboard.textContent = score();
   } else if ((humanSelection === "paper") && (robotSelection === "rock")) {
      humanScore++;
      commentary.textContent = "HUMAN chooses paper; ROBOT chooses rock. Paper covers rock.";
      scoreboard.textContent = score();
   } else if ((humanSelection === "scissors") && (robotSelection === "paper")) {
      humanScore++;
      commentary.textContent = "HUMAN chooses scissors; ROBOT chooses paper. Scissors cut paper.";
      scoreboard.textContent = score();
   } else {
      robotScore++;
      commentary.textContent = "HUMAN chooses scissors; ROBOT chooses rock. Rock breaks scissors.";
      scoreboard.textContent = score();
      };
}
function playRockRound() {
   playRound("rock", getRobotSelection());
}
function playPaperRound() {
   playRound("paper", getRobotSelection());
}
function playScissorsRound() {
   playRound("scissors", getRobotSelection());
}
const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", playRockRound);
const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", playPaperRound);
const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", playScissorsRound);