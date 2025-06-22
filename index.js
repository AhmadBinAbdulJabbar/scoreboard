let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function renderHomeScore() {
  homeScoreEl.textContent = homeScore;
}

function renderGuestScore() {
  guestScoreEl.textContent = guestScore;
}

function addhomeScore1() {
  homeScore += 1;
  renderHomeScore();
}

function addhomeScore2() {
  homeScore += 2;
  renderHomeScore();
}

function addhomeScore3() {
  homeScore += 3;
  renderHomeScore();
}

function addguestScore1() {
  guestScore += 1;
  renderGuestScore();
}

function addguestScore2() {
  guestScore += 2;
  renderGuestScore();
}

function addguestScore3() {
  guestScore += 3;
  renderGuestScore();
}

function startNewGame() {
  homeScore = 0;
  guestScore = 0;
  renderGuestScore();
  renderHomeScore();
}
