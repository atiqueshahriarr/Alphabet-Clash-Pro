function homePlayBtnFunction() {
  hideHome();
  displayPlayGround();
  continueGame();
}

function continueGame() {
  const randomAlphabet = getARandomAlphabet();
  const alphabetLetter = getElement("alphabetDisplay");

  setElement(alphabetLetter, randomAlphabet);

  //Add Key Button Color
  const keyBtn = getElement(randomAlphabet);
  addBgElement(keyBtn);
}

function getARandomAlphabet() {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const randomIndex = Math.round(Math.random() * 25);
  const alphabet = alphabets[randomIndex];
  return alphabet;
}


function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  if (playerPressed === "Escape") {
    gameOver();
  }

  const displayAlpha = getElement("alphabetDisplay").innerText;

  if (playerPressed === displayAlpha) {
    const keyBtn = getElement(playerPressed);
    removeBgElement(keyBtn);

    const score = getElement("scoreBtn");
    const scoreVal = parseInt(score.innerText);
    setElement(score, scoreVal + 1);
    continueGame();
  }
  else {
    const life = getElement("lifeBtn");
    const lifeVal = parseInt(life.innerText);
    setElement(life, lifeVal - 1);
    if (lifeVal === 1) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress)

function playAgain() {
  hideHome();
  displayPlayGround();
  hideScore();

  const score = getElement("scoreBtn");
  setElement(score, 0);

  const life = getElement("lifeBtn");
  setElement(life, 3);
}