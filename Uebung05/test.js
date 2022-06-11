/**
 * 2. when speaker is added other timers will continue
 */

//speaker is added and all other speakers are stopped
document.getElementById("id3").addEventListener
("click", addSpeaker);

function addSpeaker() {

    //Create list item
    const listItem = document.createElement("li");

    //Create text node with input name
    const node = document.createTextNode(document.getElementById("id1").value);

    //append node with input name
    listItem.appendChild(node);

    //Create timer element
    const timer = document.createElement("a");

    //Stop all other speaker's time


    //Start time with 00:00:00 for every speaker
    let hourS = 0;
    let minuteS = 0;
    let secondS = 0;

    //update of timer function every second
    let myVar = setInterval(addTimer,1000);

    //add timer
    function addTimer() {
        let hours = hourS;
        let minutes = minuteS;
        let seconds = secondS;
        seconds++;
        if(seconds >= 60) {
            minutes++;
            seconds -= 60;
        }
        if(minutes >= 60) {
            hours++;
            minutes -= 60;
        }
        if(hours >= 24) {
            hours -= 24;
        }
        hourS = hours;
        minuteS = minutes;
        secondS = seconds;
        let string = " ";
        if(hours < 10) {
            string += "0" + hours + ":";
        } else {
            string += hours + ":";
        }
        if(minutes < 10) {
            string += "0" + minutes + ":";
        } else {
            string += minutes * ":";
        }
        if(seconds < 10) {
            string += "0" + seconds + " ";
        } else {
            string += seconds + " ";
        }
        timer.innerHTML = string;
    }

    //append timer to list
    listItem.appendChild(timer);

    //Create Button
    const button = document.createElement("button");

    //edit button
    button.innerHTML = "Stop";
    button.type = "submit";

    /**
     * when button shows start timer is does not run
     * update of mytimer is cleared
     *
     * when button shows stop timer does run
     * update od mytimer is set again
     */
    button.addEventListener("click", function() {
        if(button.innerHTML === "Stop") {
            button.innerHTML = "Start";
            clearInterval(myVar);
        } else {
            button.innerHTML = "Stop";
            //Set timer to 00:00:00
            myVar = setInterval(addTimer, 1000);
        };
    });

    //Append Button
    listItem.appendChild(button);

    //Create element
    const element = document.getElementById("id2");

    //Append listItem to element
    element.appendChild(listItem);

}
