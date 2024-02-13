console.log("Hello");

function homePlayBtnFunction() {
  const homePage = document.getElementById("home");
  homePage.classList.add("hidden");

  const playGroundPage = document.getElementById("play-ground");
  playGroundPage.classList.remove("hidden");


}