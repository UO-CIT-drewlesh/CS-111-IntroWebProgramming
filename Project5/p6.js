/*
Drew Lesh
CIS Project 6
10/26/22
*/

function countDown(seconds) {
//Step 1: use setInterval to call internal function with 1 second timer
    thisInterval = setInterval(handleTimer, 1000);

//Step 2: create handleTimer function
    function handleTimer(){
        let textEditor = document.querySelector("p");
        let imageEditor = document.querySelector("img");
        textEditor.textContent=seconds;
//Step 3: when timer reaches 0 declare blastoff
        if (seconds === 0) { //Note: if this is put below the while statement, "blastoff" won't have a 1 sec interval
            console.log("Blast-Off");
            seconds = "Blast-Off!";
            textEditor.textContent=seconds;
            imageEditor.style.display = "block";
            clearInterval(thisInterval);
        }
//Step 4: use a while loop to count down the number value
        while (seconds > 0) {
            console.log(seconds);
            seconds -= 1;
            break;
        } 
    }

}
console.log(countDown(5));

