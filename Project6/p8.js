/*
Description: CIS 111 Project 8
Author: Drew Lesh
11.7.22
*/

// Entry point startup()
function startup() {
    
    /* Step 1 (Required): Populate the config array with three objects to be used for each of the three
       prompts, each object with the following properties:
       prompt: String property to hold prompt() text
       prop: String property that is the property to be used when storing user input for this prompt 
       type: String property, either 'string', or 'integer'
    */
    const config = [
        { prompt: "Artist", prop: "artist", type: "string"},
        { prompt: "Song", prop: "song", type: "string"},
        { prompt: "Year", prop: "year", type: "integer"}
    ];

    // Empty data array to hold prompt input
    const data = [];


    /* Step 2: Use a for loop to collect user input using config array prompt for prompt(), storing all three
       data points using the config prop value as the property, and all three prop: value stored in a single object
       as a single array item 
    */
    function promptLoop() {
        // 1. Initialize variables
        let input;
        const inputLogs = {};

        // 2. Run for loop, prompting each time there is a another Prompt in the config const
        for (let i=0; i<config.length; i++) {
            input = prompt(config[i].prompt);

            if (input===null){
                input = "";
            }
            // 3. Add all inputs to the inputLogs const object
            // Extra Credit: Validate 'Year' as an integer from using configs type property, or change it to a '0'; as Not-a-Number. 
            if (config[i].type === "integer") {
                input = parseInt(input);
                if (isNaN(input)) {
                    input = 0;
                }
                inputLogs[config[i].prop] = input;
            } else {
                inputLogs[config[i].prop] = input;
            }

        }
        // 3. Push the inputLogs to the data array...Outside the for loop
        // console.log(inputLogs);
        data.push(inputLogs);
    }
    promptLoop();

    // Extra Credit: Ask to repeat the promptLoop function to add more data
    do {
        input = prompt("Add More: Y/N?");
        if (input === "Yes" || input === "yes" || input === "Y" || input === "y") {
            promptLoop();
        } else {
            break;
        }
    } while (input !== "No" || input !== "no" || input !== "N" || input !== "n");
    console.log(data);


    // Step 3: Use console.log to display each data property and value on
    // a single line, with each property: value separated by a comma
    // e.g. Artist: OneRepublic, Song: I Ain't Worried, Year: 2022
    // Tip: Use a for loop over the data array, and then a for loop over config

    // 1. start up string variable to concatenate values and inputs 
    let stringOutput = "";
    // 2. Loop through the data array
    for (let i=0; i<data.length; i++) {   
        // 3. Loop through the config array and concatenate the config prompts, and data values that match those prompts
        for (let a=0; a<config.length; a++) {
            stringOutput += "<span>"+config[a].prompt+": </span>";
            if (config[a].prompt === "Artist") {
                    stringOutput += data[i].artist+", ";
            } else if (config[a].prompt === "Song") {
                stringOutput += data[i].song+", ";
            } else if(config[a].prompt === "Year") {
                stringOutput += data[i].year+"<br>";
            }
        }
    }

    // 4. Ouput to the console, output to the html
    console.log(stringOutput.replaceAll("<br>", "\n").replaceAll("<span>", "").replaceAll("</span>",""));
    document.querySelector('#output').innerHTML = stringOutput;
    
 }
  // Call startup()
  startup();