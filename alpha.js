console.log("Hello");

function homePlayBtnFunction() {
  const homePage = document.getElementById("home");
  homePage.classList.add("hidden");

  const playGroundPage = document.getElementById("play-ground");
  playGroundPage.classList.remove("hidden");
  continueGame();

}

function continueGame() {
  const randomAlphabet = getARandomAlphabet();
  console.log(randomAlphabet);

  const alphabetLetter = document.getElementById('alphabetDisplay');
  alphabetLetter.innerText = randomAlphabet;
  const keyBtn = document.getElementById(randomAlphabet);
  keyBtn.classList.add("bg-orange-500");

}

function getARandomAlphabet() {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const randomIndex = Math.round(Math.random() * 25);
  const alphabet = alphabets[randomIndex];
  return alphabet;
}


function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  const displayAlpha = document.getElementById("alphabetDisplay").innerText;
  if (playerPressed === displayAlpha) {
    console.log(true);
    const keyBtn = document.getElementById(playerPressed);
    keyBtn.classList.remove("bg-orange-500");
    const score = document.getElementById("scoreBtn");
    const scoreVal = parseInt(score.innerText);
    score.innerText = scoreVal + 1;
    continueGame();
  }
  else {
    console.log(false);
    const life = document.getElementById("lifeBtn");
    const lifeValue = parseInt(life.innerText);

    if (lifeValue === 0) {
      const playGroundPage = document.getElementById("play-ground");
      playGroundPage.classList.add("hidden");
      const scorePage = document.getElementById("score");
      scorePage.classList.remove("hidden");
    }
    life.innerText = lifeValue - 1;

  }
}
document.addEventListener("keyup", handleKeyboardButtonPress)

