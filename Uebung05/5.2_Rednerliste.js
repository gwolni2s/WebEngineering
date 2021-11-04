/**
 * 1. start/stop does not work properly because time skips to the time without pause (sum does not work)
 * 2. when speaker is added other timers will continue
 */

document.getElementById("id3").addEventListener
        ("click", addSpeaker);

function addSpeaker() {
    //Create list item
    const listItem = document.createElement("li");

    //Create text node
    const node = document.createTextNode(document.getElementById("id1").value);

    //append node
    listItem.appendChild(node);

    //Create timer
    const timer = document.createElement("a");

    //Create now date
    const now = new Date();
    //edit timer
    let myVar = setInterval(addTimer,1000);
    function addTimer() {
        const d = new Date();
        const diff = d;
        diff.setHours(d.getHours() - now.getHours());
        diff.setMinutes(d.getMinutes() - now.getMinutes());
        diff.setSeconds(d.getSeconds() - now.getSeconds());
        timer.innerHTML = " " + diff.toLocaleTimeString() + " ";
    }
    //append timer
    listItem.appendChild(timer);
    //Create Button
    const button = document.createElement("button");
    //edit button
    button.innerHTML = "Stop";
    button.type = "submit";
    button.addEventListener("click", function() {
        if(button.innerHTML === "Stop") {
            button.innerHTML = "Start";
            clearInterval(myVar);
        } else {
            button.innerHTML = "Stop";
            myVar = setInterval(addTimer, 1000);
        };
    });

    //Append Button
    listItem.appendChild(button);

    //Create element
    const element = document.getElementById("id2");

    //Append listItem
    element.appendChild(listItem);

}