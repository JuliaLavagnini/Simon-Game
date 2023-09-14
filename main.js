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

//Function to decide and play the sequence
const pathway = () => {
    randomColors.push(getRandomValue(colors));
    count = randomColors.length;
    pathGenerator = true;
    pathwayPlay(count);
};

const pathwayPlay = async (count) => {
    countCenter.innerText = count;
    for (let item of randomColors){
        let currentColor = document.querySelector(`.${item}`);
        await delay(500);
        currentColor.style.backgroundColor = `${colors[item]["new"]}`;
        await delay(600);
        currentColor.style.backgroundColor = `${colors[item]["current"]}`;
        await delay(600);
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
startBtn.addEventListener("click", event => {
    startGame();
});
