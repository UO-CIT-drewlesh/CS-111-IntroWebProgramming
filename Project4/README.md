# Project 4 - Number Guessing Simulation

## Overview
This project simulates a computer guessing a target number within a given range using random guesses. It records how many attempts it takes to guess the correct number and calculates the average number of guesses over multiple trials.

## Skills Learned
- Writing and organizing JavaScript functions
- Using `Math.random()` and related methods for generating random integers
- Implementing `do...while` loops for repeated attempts
- Applying loops and counters to track attempts
- Calculating averages over multiple runs
- Logging results to the console for testing and debugging

## How It Works
1. **`getRandomInt(min, max)`** generates a random integer between the specified range.
2. **`guessNumber(target, min, max)`** repeatedly calls `getRandomInt` until the target number is guessed, counting the attempts.
3. **`getAverageGuess(num, min, max, loops)`** runs `guessNumber` multiple times to calculate the average attempts needed to guess the number.

## Example Output
```plaintext
The computer was able to guess 47 in 28 guesses
The computer was able to guess 33 in an average of 50 guesses
```
## View
[View Repo](https://uo-cit-drewlesh.github.io/CS-111-IntroWebProgramming/Project4/)
