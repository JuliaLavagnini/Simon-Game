const startBtn = document.getElementById("startBtn");
const countCenter = document.getElementById("count");
const colorPart = document.querySelectorAll(".color-part");
const score = document.getElementById("score");
const titlElement = document.getElementById("mainTitle");

/**
 * Intro Popup
 */
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    const popup = document.getElementById("popup");
    if (popup) {
      popup.style.display = "inline";
    } else {
      console.error("Popup element not found.");
    }
  }, 1000);
});

// Event listener for the submit button
document
  .getElementById("submitBtn")
  .addEventListener("click", function () {
    // Get the value from the input field
    const name = document.getElementById("nameInput").value;

    // Validate the input
    if (name.length < 3) {
      alert("Name must be at least 3 characters long.");
      return;
    }

    // Display the name on the h1 tag
    titlElement.innerHTML = name + '!' + ' Let\'s play!!'
    // Hide the popup
    document.getElementById("popup").style.display = "none";
  });

/**
 * Help Button
 */
document.addEventListener("DOMContentLoaded", function () {
  let objHidden = false;
  const help = document.querySelector(".helpBtn");
  help.addEventListener("click", function () {
    if (objHidden) {
      objHidden = false;
      document.querySelector(
        ".popupHelp"
      ).style.visibility = "visible";
    } else {
      objHidden = true;
      document.querySelector(
        ".popupHelp"
      ).style.visibility = "hidden";
    }
  });
});

/**
 * Mapping colors objects
 */
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

/**
 * Function to reset game state
 */
const resetGameState = () => {
  count = 0;
  clickCount = 0;
  randomColors = [];
  countCenter.innerHTML = "0";
};

/**
 * Start the game
 */
const startGame = () => {
  resetGameState();
  pathGenerator = true; // Set pathGenerator to true
  startBtn.style.display = "none";
  pathway();
  countCenter.style.color = "#121212";
};

/**
 * Function to decide and play the sequence
 */
const pathway = () => {
  randomColors.push(getRandomValue(colors));
  pathGenerator = true;
  pathwayPlay();
};

const pathwayPlay = () => {
  let index = 0;

  function playColor() {
    if (index < randomColors.length) {
      let item = randomColors[index];
      let currentColor = document.querySelector(`.${item}`);

      currentColor.style.backgroundColor = `${colors[item]["new"]}`;
      setTimeout(() => {
        currentColor.style.backgroundColor = `${colors[item]["current"]}`;
        setTimeout(() => {
          index++;
          playColor();
          countCenter.innerHTML = randomColors.length; // Display the current level
        }, 500);
      }, 400);
    } else {
      index = 0; // Reset index for the next sequence
      pathGenerator = false;
    }
  }

  playColor();
};

/**
 * Delay for blink effect to use on pathwayPlay()
 */
async function delay(time) {
  return await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

/**
 * Function to get a random value from object
 */
const getRandomValue = (obj) => {
  let arr = Object.keys(obj);
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * When user click on the colors
 */
const colorPartActive = () => {
  colorPart.forEach((element) => {
    element.addEventListener("click", async (i) => {
      if (pathGenerator) {
        return false;
      } else if (
        i.target.classList[0] === randomColors[clickCount]
      ) {
        i.target.style.backgroundColor = `${
          colors[randomColors[clickCount]]["new"]
        }`;
        await delay(500);
        i.target.style.backgroundColor = `${
          colors[randomColors[clickCount]]["current"]
        }`;
        clickCount += 1;
        if (clickCount === randomColors.length) {
          clickCount = 0;
          pathway();
        }
      } else {
        lose();
      }
    });
  });
};

/**
 * Function to when the user gets the sequence wrong
 */
const lose = () => {
  pathGenerator = false;
  countCenter.innerHTML = " X ";
  countCenter.style.color = "#FF0000";
  score.innerHTML = `You stopped at level: ${
    randomColors.length - 1
  }`;
  startBtn.style.display = "inline";
  resetGameState(); // Reset game state at the end
};

// Initialize game events after the DOM has loaded
window.addEventListener("load", function () {
  const startBtn = document.getElementById("startBtn");
  startBtn.addEventListener("click", startGame);
  colorPartActive(); // Set up color part events once
});

module.exports = {
  startGame,
  pathwayPlay,
  delay,
  getRandomValue,
  colorPartActive,
  lose,
  resetGameState,
};
