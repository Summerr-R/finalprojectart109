// Get the "Red" button by its ID
const redButton = document.getElementById("redButton");

// Add an event listener to the "Red" button
redButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "red"; // Change the background color to red
});

// You can add similar event listeners for other buttons if needed
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