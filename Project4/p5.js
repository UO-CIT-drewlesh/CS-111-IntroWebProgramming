/*
Description: CS 111 Project 5
Author: Drew Lesh
10/15/22
*/


    //PART 3:
function factorial (num) {
    // Initialize variable that stores the factorial value
    let result = 1;
    // Step 1: Set -1 as a default 'result' for values < 0 (invalid input)
    if (num < 0) {
        result = -1;
    }
    // Step 2: Test if input is > 0, calculate factorial and set 'result' to calculated value
    else if (num > 0) {
        for (i = 1; i<=num; i++){
            /*for each iteration, 'result' will be the variable that stores and calculates the factorial...
            'result' will store the value for each 'i' that occurs in the calculation; every iteration, 'result' changes to a different number
            */
            result = result * i;
        }
    }
    // Step 3: Test if input = 0, set 'result' to 1
    else if (num === 0){
        result = 1;
    }
    // Return 'result'
    return result;
}
console.log("The factorial of", 8, "is", factorial(8));


    //PART 4:

    /**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-rangeLinks to an external site.
*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function guessNumber (target, min, max){ //calls the function(getRandomInt) until it guesses the 'target' number: returns # of guesses it took
    var attempt = 0;
    // Step 1: create a variable that counts the number of guesses
    var guesses = 0;
    // Step 2: set up a do...while loop
    do {
    // Step 3: within the loop, call the function GetRandomInt, set its value to a variable, which allows use in conditional statement
        attempt = getRandomInt(min, max);
    // Step 4: increase the number of guess by 1 each time the loop is ran
        guesses += 1;
    }
    // Step 5: when the target number is equal to getRandomInt, stop the loop.
    while(target != attempt);
    // Step 6: return guesses
    return guesses;
}
console.log("The computer was able to guess", 47, "in", guessNumber(47, 1, 100), "guesses");


function getAverageGuess(num, min, max, loops) {
    // Initialize variable to add total amount of guesses it took to get it right
    let total = 0;

    let attempt = 0;
    // Step 1: create a for loop that runs until the number of 'loops' is reached
    for (let i=1;  i<=loops;  i++){ //i starts at 1 so we don't do more loops than we should, we could also set i=0, and i<loops
        attempt = guessNumber(num, min, max);
        //  console.log("# of guesses on attempt:", attempt);
    // Step 3: add the function variable(guessNumber) value to the 'total' variable
        total += attempt;
    // Step 4: reset attempt to 0 in case that it carries over value
        attempt = 0;
        //  console.log("Total guesses:", total);
        }
    // Step 4: create avg variable and find the average(total/loops)
    let avg = Math.round((total / loops));
    // Step 5: dont return a value, rather output to the console
    console.log("The computer was able to guess", num, "in an average of", avg, "guesses")
}
console.log(getAverageGuess(33, 1, 100, 1000));
