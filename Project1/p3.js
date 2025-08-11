/*
Description: CIS 111 Project 3
Author: Drew Lesh
10.5.22
*/

//Part 2: some facts printed to the console
function basicFacts() {
    console.log("#1", "Drew");
    console.log("#2", "Bass Canyon");
    console.log("#3", "Sky Blue" );
    console.log("#4", "Shenanigans");
    console.log("#5", "Norway" );
}

basicFacts();

//Part 3: takes the mean of 4 numbers with input paremeters
function averageFourNums(one, two, three, four) {
    let average = (one + two + three + four) / 4;

    /*
    Note that when you use "," and "+" to print to the console, two different things will happen.
    "," will simply call the object(variable) and its data type will stick with. However using a "+" will
    concatenate you variable to a string type in this case. Use ","
    */

    console.log("The average of",one+",",two+",",three+",",four+" is",average);
}

averageFourNums(10, 12, 150, 4);

//Part 4: use input parameters to calculate the price per square inch of different pizzas. Get the best bang for your buck!
function pizzaPSI(diameter, cost) {
    //area of pizza calculation
    A = 3.14*((diameter/2)**2);
    //Price per square inch calculation is returned using the cost/A, the variables created.
    PSI = cost/A;
    return PSI;
}

console.log('10" pizza at $5.99 has a PSI of', (pizzaPSI(10, 5.99)));
console.log('12" pizza at $7.99 has a PSI of', (pizzaPSI(12, 7.99)));
console.log('14" pizza at $9.99 has a PSI of', (pizzaPSI(14, 9.99)));
console.log('16" pizza at $11.99 has a PSI of', (pizzaPSI(16, 11.99)));
