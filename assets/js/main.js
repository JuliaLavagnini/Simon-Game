const startBtn = document.querySelector("#startBtn");
const countCenter = document.querySelector("#count");
const colorPart = document.querySelectorAll(".color-part");
const score = document.querySelector("#score");

//Intro Popup
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".popup").style.display =
      "inline";
  }, 1000);
});

document
  .querySelector("#close")
  .addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
  });

//Help Button
let objHidden = false;
const help = document.querySelector(".helpBtn");
help.addEventListener("click", function () {
  if (objHidden) {
    objHidden = false;
    document.querySelector(".popupHelp").style.visibility =
      "visible";
  } else {
    objHidden = true;
    document.querySelector(".popupHelp").style.visibility =
      "hidden";
  }
});

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
  color4: {
    current: "#F693C4",
    new: "#F11A7B",
  },
  color3: {
    current: "#78C1F3",
    new: "#00A8FF",
  },
};

let randomColors = [];
let pathGenerator = false;
let count,
  clickCount = 0;

//Start the game
const startGame = () => {
  count = 0;
  clickCount = 0;
  randomColors = [];
  pathGenerator = false;
  startBtn.style.display = "none";
  pathway();

  countCenter.style.color = "#121212";
};

//Function to decide and play the sequence
const pathway = () => {
  randomColors.push(getRandomValue(colors));
  count = randomColors.length;
  pathGenerator = true;
  pathwayPlay(count);
};

const pathwayPlay = async (count) => {
  countCenter.innerText = count;
  for (let item of randomColors) {
    let currentColor = document.querySelector(`.${item}`);
    await delay(500);
    currentColor.style.backgroundColor = `${colors[item]["new"]}`;

    await delay(400);
    currentColor.style.backgroundColor = `${colors[item]["current"]}`;
    await delay(500);
  }
  pathGenerator = false;
};

//Delay for blink effect to use on pathwayPlay()
async function delay(time) {
  return await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

//Function to get a random value from object
const getRandomValue = (obj) => {
  let arr = Object.keys(obj);
  return arr[Math.floor(Math.random() * arr.length)];
};

//Call functions on DOM
startBtn.addEventListener("click", (event) => {
  startGame();
});

//When user click on the colors
colorPart.forEach((element) => {
  element.addEventListener("click", async (i) => {
    //if user clicks the same color then next level
    if (pathGenerator) {
      return false;
    } else if (
      i.target.classList[0] == randomColors[clickCount]
    ) {
      //blick effect on click
      i.target.style.backgroundColor = `${
        colors[randomColors[clickCount]]["new"]
      }`;
      await delay(500);
      i.target.style.backgroundColor = `${
        colors[randomColors[clickCount]]["current"]
      }`;
      //User click
      clickCount += 1;
      //Next level if number of valid clicks == count
      if (clickCount == count) {
        clickCount = 0;
        pathway();
      }
    } else {
      lose();
    }
  });
});

//Function to when the user gets the sequence wrong
const lose = () => {
  countCenter.innerHTML = " X ";
  countCenter.style.color = "#FF0000";
  Score.innerHTML = `You stopped at level: ${count}`;
  startBtn.style.display = "inline";
};
