"use strict";

let num = Math.floor(Math.random() * 20 + 1);

let totalScore = 20;
let highscore = 0;
document.querySelector(".checkbtn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".scrolling-list").value);

  const displayMessage = function (message) {
    document.querySelector(".hints").textContent = message;
  };

  //when no number is entered
  if (!guess) {
    displayMessage("⛔ No Number");
  }
  //when user is wins
  else if (guess === num) {
    displayMessage("🥇 Correct Answer");
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = num;
    // document.querySelector(".highscore").textContent = totalScore;
    if (totalScore > highscore) {
      highscore = totalScore;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when the guess is high
  } else if (guess !== num) {
    if (totalScore > 1) {
      displayMessage(guess > num ? "⬆️ Too high" : "⬇️ Too low");
      totalScore--;
      document.getElementById("score").innerHTML = totalScore;
    } else {
      totalScore--;
      document.getElementById("score").innerHTML = totalScore;
      displayMessage("💥 You lost the game");
    }
  }
});

const againBtn = document.getElementById("again-btn");
againBtn.addEventListener("click", resetPage);

function resetPage() {
  totalScore = 20;
  num = Math.floor(Math.random() * 20 + 1);
  document.getElementById("score").innerHTML = totalScore;
  document.querySelector(".hints").textContent = "🤔Start guessing. . . .";
  document.querySelector(".number").textContent = "?";
  document.body.style.backgroundColor = "black";
  document.querySelector(".scrolling-list").value = "";
  document.querySelector(".highscore").textContent = highscore;
}
