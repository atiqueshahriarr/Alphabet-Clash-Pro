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
  const keyBtn=document.getElementById(randomAlphabet);
  keyBtn.classList.add("bg-orange-500");
}

function getARandomAlphabet() {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const randomIndex = Math.round(Math.random() * 25);
  const alphabet = alphabets[randomIndex];
  return alphabet;
}