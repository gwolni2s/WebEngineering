/**
 * 1. start/stop does not work properly because time skips to the time without pause (sum does not work)
 * 2. when speaker is added other timers will continue
 */

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

    //Create now date and diff
    let now = new Date();
    let diff;
    //update of timer function every second
    let myVar = setInterval(addTimer,1000);

    //function to create timer
    function addTimer() {
        const d = new Date();
        diff = d;

        diff.setHours(d.getHours() - now.getHours());
        diff.setMinutes(d.getMinutes() - now.getMinutes());
        diff.setSeconds(d.getSeconds() - now.getSeconds());
        timer.innerHTML = " " + diff.toLocaleTimeString() + " ";
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
            now = new Date();
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
