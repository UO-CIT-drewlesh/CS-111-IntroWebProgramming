/*
Description: CIS 111 Project 9
Author: Drew Lesh
11.21.22
*/


// Global variables
let _clickCount = 0;
const _colors = ["#C97FEB", "#EB9C7F", "#DECD62", "#5FF580", "#428BF0", "#EB003F", "#000C7D", "#99DEB6", "#FFF49E", "#CC816C"];
const _mouseClickedPositions = [];

// Generate random number with minimum and maximum as parameters
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-rangeLinks to an external site.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// PART 3: Callback function for incrementing button clicked
function handleClickMeButton(){
    _clickCount += 1;
    document.querySelector('#timesClickedSpan').textContent = _clickCount;
}


// PART 4: Callback function to change the background color with a button
function handleChangeBackgroundColorButtonClick() {
    document.body.style.backgroundColor = _colors[getRandomInt(0, 9)];
}


// PART 5: Show the position(x/y) of the mouse on the html page
function handleMouseMoveEvent(e) {
    const position = e.clientX + "/" + e.clientY;
    document.querySelector('#mousePositionSpan').textContent = position;
}


// PART 6, 7: Store Mouse Click Position in an array; output to the console. Dynamically add it to the HTML page by creating new div element
function handleMouseUpEvent(e) {
    const position = e.clientX + "/" + e.clientY;
    _mouseClickedPositions.push({x: e.clientX, y: e.clientY});
    console.log(_mouseClickedPositions);

    const newDiv = document.createElement("div");
    newDiv.innerHTML = position;
    document.querySelector("#mouseClickedPositionsDiv").appendChild(newDiv);
}


// PART 2: Startup function listens for an event then, then uses a callback function for that specific event
function startup(){
    document.querySelector("#clickMeButton").addEventListener('click', handleClickMeButton, false);

    document.querySelector("#changeBackgroundColorButton").addEventListener('click', handleChangeBackgroundColorButtonClick, false);

    document.body.addEventListener("mousemove", handleMouseMoveEvent);

    // window.addEventListener("mousemove", handleMouseMoveEvent);
    document.body.addEventListener("mouseup", handleMouseUpEvent);
}

window.addEventListener("load", startup, false);