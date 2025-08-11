# Project 6 – Colorful Strings with Random Colors

## Overview
This project prompts the user repeatedly to enter strings, which are then displayed on the webpage in different random colors and with the first letter capitalized. It demonstrates dynamic user input handling, string manipulation, and DOM updates.

## Skills Learned
- Using prompt loops to collect user input until a blank entry
- Manipulating arrays and using `.map()` for transformations
- Creating and using helper functions (e.g., capitalize first letter)
- Generating random numbers to select random colors
- Dynamically generating HTML content with inline styles
- Updating the DOM using `innerHTML`
- Combining JavaScript, HTML, and CSS in a simple interactive app

## How It Works
1. The `startup()` function prompts the user to input strings repeatedly.
2. Inputs are stored in an array until the user submits a blank input.
3. Each input string is transformed to capitalize the first letter.
4. Each transformed string is wrapped in a `<span>` with a randomly assigned color from a predefined list.
5. All colored strings are concatenated with line breaks and rendered inside the `#output` div on the page.

## Live Demo
[View Live Webpage](https://uo-cit-drewlesh.github.io/CIS-111-Project6/)

## Repository
[View Project Repository](https://github.com/yourusername/CIS-111-Project6)
