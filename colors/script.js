// Get the "Red" button by its ID
const redButton = document.getElementById("redButton");

// Add an event listener to the "Red" button
redButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "red"; // Change the background color to red
});


const orangeButton = document.getElementById("orangeButton");
orangeButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "orange"; // Change the background color to orange
});

const yellowButton = document.getElementById("yellowButton");
yellowButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow"; // Change the background color to yellow
});

const greenButton = document.getElementById("greenButton");
greenButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "green"; // Change the background color to green
});

const blueButton = document.getElementById("blueButton");
blueButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue"; // Change the background color to blue
});

const purpleButton = document.getElementById("purpleButton");
purpleButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "purple"; // Change the background color to purple
});
const colorText = document.getElementById("colorText");

document.getElementById("redButton").addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
  colorText.textContent = "Passion, Love, and Excitement";
});

document.getElementById("orangeButton").addEventListener("click", () => {
  document.body.style.backgroundColor = "orange";
  colorText.textContent = "Energy, enthusiasm, warmth, change, and movement";
});

document.getElementById("yellowButton").addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
  colorText.textContent = "Happiness, joy, optimism";
});

document.getElementById("greenButton").addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
  colorText.textContent = "Nature, growth, renewal, tranquility, harmony";
});

document.getElementById("blueButton").addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
  colorText.textContent = "Serenity, calmness, inspiration, wisdom";
});

document.getElementById("purpleButton").addEventListener("click", () => {
  document.body.style.backgroundColor = "purple";
  colorText.textContent = "Royalty, luxury, balance, bravery, and independence";
});

document.getElementById("reset-Button").addEventListener("click", function () {
    location.reload();
  });