const startBtn = document.querySelector("#startBtn");
const countCenter = document.querySelector("#count");
const colorPart = document.querySelectorAll(".color-part");
const higherScore = document.querySelector("#higherScore");

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