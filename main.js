const startBtn = document.querySelector("#startBtn");
const countCenter = document.querySelector("#count");
const colorPart = document.querySelectorAll(".color-part");
const higherScore = document.querySelector("#higherScore");
const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");


// Mapping colors objects
const colors = {
  color1: {
    current: "#BD87DE",
    new: "#890596",
  },
  color2: {
    current: "#FFCC80",
    new: "#FD8D14",
  },
  color3: {
    current: "#F693C4",
    new: "#F11A7B",
  },
  color4: {
    current: "#78C1F3",
    new: "#00A8FF",
  },
};

let randomColors = [];
let pathGenerator = false;
let count, clickCount = 0;

//Start the game
const startGame = () => {
    count = 0;
    clickCount = 0;
    randomColors = [];
    pathGenerator = false;
    wrapper.classList.remove("main");
    container.classList.add("main");
    pathway();
};

//Call functions on DOM
startBtn.addEventListener("click", event => {
    startGame();
});
