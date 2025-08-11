/*
Description: CIS111 - Project 4
Author: Drew Lesh
10/14/22
*/


    //Part 3:

function pizzaPSI(diameter, cost) {
    //calculation: area of pizza
    r = diameter / 2;
    A = Math.PI * Math.pow(r, 2);
    //Price per square inch(PSI) calculation is returned
    PSI = cost / A;
    return PSI;
}
console.log('18" pizza at $13.99 has a PSI of', pizzaPSI(18, 13.99).toFixed(2));


    //Part 4:

function isNumeric(character) {
    //STEP 1: set up variables to use in while loop
    let counter = 0;
    let answer = false; //initialize it as false that way we don't need to code that part into the loop. It will be false unless told otherwise.

    //STEP 2: Use a while loop, stop it when it reaches 10 because we are only checking the numbers 0-9.
    while (counter < 10){

    //STEP 3: if the parameter inputed is equal to counter(the variable we created), then we will return the answer as true
        if (counter === character) { //Note: triple equal signs are strict to type and value, double(==) aren't strict to type
            return answer = true;
        } 
    //STEP 4: if counter is not equal to our input, then we will raise the counter by one until we get to 9. The loops stops before 10.
        else {
            counter++;
        }
    }
    //return the answer(outside of the if/else statements) in case it was false
    return answer;
}
//Logs for isNumeric()
console.log("Is 5 a number?", isNumeric(5));
console.log("Is A a number?", isNumeric("A"));


    //Part 5:

//Instructors code: checks to see if its a leap year
function isLeap(year) {
    return new Date(year, 1, 29).getDate() === 29;
  }

    //STEP 1: set up function with year, month as parameters. This function returns the numbers of days in the specified month
function getDaysInMonth(year, month) {
 
    //STEP 2: use switch statments for the months, each case(1-12) will be a certain month
        switch (month) {
        //January
        case 1:
    //STEP 3: label number days for the case
            days = 31
    //STEP 4: break out of each case
            break;
        //February
        case 2:
    //STEP 5: use isLeap() function to check if its a leap year using an if statement
            if (isLeap(year)==true) {
                days = 29;
            } else {
                days = 28;
            }
            break;
        //March
        case 3:
            days = 31;
            break;
        //April
        case 4:
            days = 30;
            break;
        //May
        case 5:
            days = 31;
            break;
        //June
        case 6:
            days = 30;
            break;
        //July
        case 7:
            days = 31;
            break;
        //August
        case 8:
            days = 31;
            break;
        //September
        case 9:
            days = 30;
            break;
        //October
        case 10:
            days = 31;
            break;
        //November
        case 11:
            days = 30;
            break;
        //December
        case 12:
            days = 31;
            break;
        //add default statement in case of a value error
        default:
            console.log('Parameters not valid.');
    }
    //STEP 6: return the days if the month value is within limits
    if (month >=1 && month <=12) {
        return days;
    } else {
        console.log('Retry Input.');
    }
}

//Logs for GetDaysInMonth()
console.log("2022, 11: " + getDaysInMonth(2022, 11));
console.log(2023 + ", " + 8 + ": " + getDaysInMonth(2023, 8));
console.log(2024 + ", " + 2 + ": " + getDaysInMonth(2024, 2));
