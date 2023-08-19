const selections = ["scissor", "paper", "rock", "lizard", "spock"];
let rulePage = document.querySelector(".rule-page");
let main = document.querySelector(".fig");
let game_area = document.querySelector(".play");
let win_area = document.querySelector(".winning-area");
let won = document.querySelector(".won");
let lost = document.querySelector(".lost");
let draw = document.querySelector(".draw");
let restart = document.querySelector(".restart");
let score = document.querySelector(".score");
let total = 0;
let select;
let right;
let left;
let rand;
function hide() {
  rulePage.style.display = "none";
}
function show() {
  rulePage.style.display = "flex";
}
function selected(a) {
  select = a;
  main.style.display = "none";
  game_area.style.display = "flex";
  let left = document.querySelector(`.play>.${selections[select]}`);
  setTimeout(() => {
    left.classList.add("left");
  }, 500);
  rand = Math.floor(Math.random() * 5);
  right = document.querySelector(`.play>.${selections[rand]}`);
  setTimeout(() => {
    right.classList.add("right");
  }, 1500);
  win_area.style.display = "flex";
  setTimeout(() => {
    if (
      (a == 0 && rand == 1) ||
      (a == 0 && rand == 3) ||
      (a == 1 && rand == 2) ||
      (a == 1 && rand == 4) ||
      (a == 2 && rand == 3) ||
      (a == 2 && rand == 0) ||
      (a == 3 && rand == 4) ||
      (a == 3 && rand == 1) ||
      (a == 4 && rand == 0) ||
      (a == 4 && rand == 2)
    ) {
      won.classList.remove("active");
      lost.classList.add("active");
      draw.classList.add("active");
      left.classList.add("win");
      restart.classList.remove("active");
      total++;
      score.innerHTML = total;
    } else if (a == rand) {
      won.classList.add("active");
      lost.classList.add("active");
      draw.classList.remove("active");
      right.classList.add("same");
      right.classList.add("win");
      restart.classList.remove("active");
      score.innerHTML = total;
    } else {
      won.classList.add("active");
      lost.classList.remove("active");
      draw.classList.add("active");
      right.classList.add("win");
      restart.classList.remove("active");
      if (total != 0) {
        total--;
      }
      score.innerHTML = total;
    }
  }, 2500);
}
function play() {
  game_area.style.display = "none";
  main.style.display = "flex";
  win_area.style.display = "none";
  left = document.querySelector(`.play>.${selections[select]}`);
  left.classList.remove("left");
  right.classList.remove("right");
  right.classList.remove("same");
  won.classList.add("active");
  lost.classList.add("active");
  draw.classList.add("active");
  restart.classList.add("active");
  left.classList.remove("win");
  right.classList.remove("win");
}
