// start the game
const playBtn = document.querySelector(".intro button");
const intro = document.querySelector(".intro"),
  match = document.querySelector(".match");

playBtn.addEventListener("click", () => {
  intro.classList.add("fadeOut");
  match.classList.remove("fadeOut");
});

// play match

const options = document.querySelectorAll(".option button"),
  playerHand = document.querySelector(".player_hand"),
  computerHand = document.querySelector(".computer_hand");

//   computer options
const computerOps = ["rock", "scissors", "paper"];

options.forEach((op) => {
  op.addEventListener("click", function () {
    const computerNum = Math.floor(Math.random() * 3);
    const computerChoice = computerOps[computerNum];
    const playerChoice = this.textContent;

    playerHand.style.animation = "shakePlayer 2s ease";
    computerHand.style.animation = "shakeComputer 2s ease";

    // 2동안 애니메이션이 진행되니까 애니메이션 진행후
    // 정보를 보내고 바꿔줌
    setTimeout(() => {
      compareHand(playerChoice, computerChoice);
      // update Imgs
      playerHand.src = `./assets/${playerChoice}.png`;
      computerHand.src = `./assets/${computerChoice}.png`;
    }, 2000);

    //손에 애니메이션이 끝나면 애니메이션을 리셋해줌
    const hands = document.querySelectorAll(".hands img");
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
  });
});

// update score

const winner = document.querySelector(".winner");

const computerScore = document.querySelector(".computer_score p"),
  playerScore = document.querySelector(".player_score p");

let pScore = 0;
let cScore = 0;

function updateScore() {
  computerScore.textContent = cScore;
  playerScore.textContent = pScore;
}

function playerWin() {
  winner.innerText = "Player Wins";
  pScore++;
  updateScore();
  return;
}

function computerWin() {
  winner.innerText = "Computer Wins";
  cScore++;
  updateScore();
  return;
}

const compareHand = (playerChoice, computerChoice) => {
  // update Text

  if (playerChoice === computerChoice) {
    winner.innerText = "It is a tie";
    return;
  } else if (playerChoice == "rock") {
    if (computerChoice == "scissors") {
      playerWin();
    } else {
      computerWin();
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      playerWin();
    } else {
      computerWin();
    }
  } else {
    if (computerChoice == "paper") {
      playerWin();
    } else {
      computerWin();
    }
  }
};
