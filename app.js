let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game Draw. Play again 🫡";
  msg.style.background = "linear-gradient(to right, #764BA2, #667EEA)";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win 🥳 Your ${userChoice} beats ${compChoice}`;
    msg.style.background = "linear-gradient(to right, #02AABD, #00CDAC)";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose 😭 ${compChoice} beats your ${userChoice}`;
    msg.style.background = "linear-gradient(to right, #FF512F, #DD2476)";
  }
};

const PlayGame = (userChoice) => {
  // Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    PlayGame(userChoice);
  });
});
