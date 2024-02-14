function getElement(elementId) {
  const element = document.getElementById(elementId);
  return element;
}


function setElement(elementId, settingValue) {
  elementId.innerText = settingValue;
}


function addClassElement(variableName) {
  variableName.classList.add("hidden");
}


function removeClassElement(variableName) {
  variableName.classList.remove("hidden");
}


function addBgElement(variableName) {
  variableName.classList.add("bg-orange-500");
}


function removeBgElement(variableName) {
  variableName.classList.remove("bg-orange-500");
}


function displayPlayGround() {
  const playGroundPage = getElement("playGround");
  removeClassElement(playGroundPage);
}

function displayScore() {
  const scorePage = getElement("score");
  removeClassElement(scorePage);
}

function hideHome() {
  const homePage = getElement("home");
  addClassElement(homePage);
}

function hidePlayGround() {
  const playGroundPage = getElement("playGround");
  addClassElement(playGroundPage);
}

function hideScore() {
  const scorePage = getElement("score");
  addClassElement(scorePage);
}


function gameOver() {
  hidePlayGround();
  hideHome();
  displayScore();

  const score = getElement("scoreBtn");
  const scoreVal = parseInt(score.innerText);

  const finalScore = getElement("finalScore");
  setElement(finalScore, scoreVal);
}
