# Project 6 – Countdown Timer with Blast-Off Animation

## Overview
This project creates an interactive countdown timer that displays numbers on the webpage and triggers a "Blast-Off!" message along with an animated GIF when the timer reaches zero. It uses DOM manipulation, timing functions, and basic CSS styling to enhance the user experience.

## Skills Learned
- Using `setInterval()` for timed repeated actions
- Creating nested functions for scoped logic (`handleTimer`)
- Manipulating the DOM with `querySelector()` to update text and image display
- Using conditionals to trigger events when the countdown ends
- Controlling element visibility with CSS (`display: none` → `display: block`)
- Structuring HTML, CSS, and JavaScript together for a small web app

## How It Works
1. The **`countDown(seconds)`** function sets an interval to update the countdown every second.
2. The number displayed decreases by one until it reaches zero.
3. When the countdown reaches zero:
   - The text changes to `"Blast-Off!"`
   - A hidden GIF is displayed
   - The timer stops
4. Styling is applied so the GIF remains hidden until the final moment.

## Live Demo
[View Live Webpage](https://uo-cit-drewlesh.github.io/CIS-110-FluencyWithInfoTech/Project6/)

## Repository
[View Project Repository](https://github.com/yourusername/Project6)
