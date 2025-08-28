/*
Description: CIS 111 Project 5 - Adding Random Colors to the input of the users prompt
Author: Drew Lesh
11.1.22
*/


// Returns a random whole number between(inclusive) the min and max
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-rangeLinks to an external site.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* startup: continuously prompts the users until there is no input. 
            The input is then outputted to the html document on different lines with random colors */ 
function startup() {

    // STEP 1: start up a variable to use capture the value of prompt
    let input;
// STEP 2: start-up a empty array as a constant
    const data = [];
// STEP 3: Use a do while loop to (do) prompt the user, setting the input variable to capture the users input, (while) if there is no input: exit the prompt loop
    do {
        input = prompt("Enter data;");

// STEP 4: Add the value of input to the array if there is an input
        if(input){
            data.push(input);
        }
    } while (input.replaceAll(" ", "").length > 0);

    // Capitalize Function - Help from "JavaScript" by Kirupa Chinnathambi - Class Reading
        // 1st: create a new function called Capitalize that uses a single parameter
    function Capitalize(value){
        // 2nd: make a new variable that uses the toUppperCase function on the first letter in the value(parameter) of the array
        let firstLetter = value.charAt(0).toUpperCase();
        // 3rd: return that variable which is the uppercase letter concatenated with the rest of the value
        return firstLetter + value.slice(1);
    }
        //4th: create a new array that uses map(uses a function on every item in an array) to use the Capitalize function on the old array
    const newData = data.map(Capitalize);

// STEP 5: Use a for loop to output data in the new array as a single string with line breaks after each input
/* STEP 6: add code to use the getRandomInt function as a way to get a random color in a inline span with color being the variable
           -Create a variable with 10 color names
           -this can be used in the loop to get a different random color with the getRandomInt function created above*/
    const colors = ["Aqua", "Aquamarine", "CadetBlue", "Coral", "Crimson", "DarkGoldenRod", "DarkOrange", "DarkSalmon", "Pink", "SpringGreen"];
    // make a new variable that is a single string: name = stringOutput
    let stringOutput = "";
    // start the for loop, which must be less than the length of the new array set
    for (let i=0; i<newData.length; i++) {
        // make a new variable concatenate the input with <span style= color: > make the color a random one for each loop
        let item = "<span style= color:"+colors[getRandomInt(0, 9)]+";>"+newData[i]+"</span>";
        console.log(item);
        // if there is an item in the array, add the item to the stringOutput variable with a line break(<br />)
        if (newData.length > 0) {
            stringOutput += item + "<br />";
        }
    }

        /* *Professors Code Below* - this allows us to use <br /> to break line after each word in the loop above(line 55).
                               innerHTML is another way of using textContent to display the output on the html, 
                               but it allows other formatting tags*/

    const ref = document.querySelector('#output'); // Get output div reference
    ref.innerHTML = stringOutput; // Use innerHTML to set the div element content, not textContent
}   

startup();