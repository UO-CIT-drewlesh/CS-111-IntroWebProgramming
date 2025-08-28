# Project 7 – Button Interactions and Mouse Tracking

## Overview
This project demonstrates DOM manipulation and event handling in JavaScript. Users can:
- Click a button to increment a counter.
- Change the webpage’s background color randomly.
- See real-time mouse position coordinates on the screen.
- Log and display the x/y positions of mouse clicks dynamically.

## Skills Learned
- Adding event listeners to DOM elements (`click`, `mousemove`, `mouseup`, `load`)
- Updating HTML content dynamically using `textContent` and `innerHTML`
- Generating random numbers within a specified range
- Creating and appending new elements to the DOM
- Storing and managing user interaction data in arrays
- Combining HTML, CSS, and JavaScript for interactive pages

## How It Works
1. The `startup()` function adds event listeners to buttons and the page body.
2. Clicking **Click Me** increments a counter displayed in `#timesClickedSpan`.
3. Clicking **Change Background Color** selects a random color from a predefined array and updates the page background.
4. Moving the mouse updates the current position (x/y) in `#mousePositionSpan`.
5. Clicking anywhere on the page stores the click coordinates in `_mouseClickedPositions`, logs them to the console, and appends them as new `div` elements inside `#mouseClickedPositionsDiv`.

## Live Demo
[View Live Webpage](https://uo-cit-drewlesh.github.io/CS-111-IntroWebProgramming/Project7/)

## Repository
[View Repo](https://github.com/UO-CIT-drewlesh/CS-111-IntroWebProgramming/tree/main/Project7)
