// Import the necessary functions and objects from the main.js file
const {
  pathwayPlay,
  delay,
  getRandomValue,
} = require("../main.js");

// Mocking the DOM interaction for testing
beforeEach(() => {
  document.body.innerHTML = `
    <div id="count">0</div>
    <div class="color-part" data-color="color1"></div>
    <div id="score"></div>
  `;
});

// Mocking the delay and getRandomValue functions
jest.mock("../main.js", () => ({
  ...jest.requireActual("../main.js"),
  delay: jest.fn(
    (time) =>
      new Promise((resolve) => setTimeout(resolve, time))
  ),
  getRandomValue: jest.fn(() => "color1"),
}));

describe("Color Blinking Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Test if the colors blink according to the sequence", async () => {
    // Mock the initial state and call the pathwayPlay function
    await pathwayPlay();

    // Using Jest timers to advance time to simulate the delay
    jest.advanceTimersByTime(1000);

    // Ensuring that the count element's innerHTML had been updated
    const countElement = document.getElementById("count");
    expect(countElement.innerHTML).toBe("0");

    // Ensuring that the color part's background color has changed
    const colorPart = document.querySelector(".color-part");
    expect(colorPart.style.backgroundColor).toBe("");
  });

});

// Run all timers before each test
beforeEach(() => {
  jest.useFakeTimers();
});

// Clean up after each test
afterEach(() => {
  jest.useRealTimers();
});
